from flask import Blueprint, render_template, redirect, session, url_for, flash, request, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app.models.user import User
from app.forms.auth_forms import SignupForm, LoginForm
from app import db, bcrypt  # ✅ Ensure correct imports

auth = Blueprint('auth', __name__)

@auth.route("/signup", methods=["GET", "POST"])
def signup():
    form = SignupForm()
    if form.validate_on_submit():
        existing_email = User.query.filter_by(email=form.email.data).first()
        existing_username = User.query.filter_by(username=form.username.data).first()

        if existing_email:
            flash("Email already exists. Please log in.", "danger")
            return redirect(url_for("auth.signup"))

        if existing_username:
            flash("Username already taken. Please choose another.", "danger")
            return redirect(url_for("auth.signup"))

        if form.password.data != form.confirm_password.data:
            flash("Passwords do not match. Please try again.", "danger")
            return redirect(url_for("auth.signup"))

        new_user = User(username=form.username.data, email=form.email.data)
        new_user.password_hash = bcrypt.generate_password_hash(form.password.data).decode("utf-8")

        try:
            db.session.add(new_user)
            db.session.commit()
            flash("Account created successfully!", "success")
            return redirect(url_for("auth.login"))
        except Exception as e:
            db.session.rollback()
            flash(f"Error: {str(e)}", "danger")

    return render_template("signup.html", form=form)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()

        if not user or not bcrypt.check_password_hash(user.password_hash, form.password.data):
            flash("Invalid credentials, please try again.", "danger")
            return redirect(url_for("auth.login"))

        login_user(user)
        session['user_id'] = user.id

        flash("Login successful!", "success")
        return redirect(url_for("progress.get_portfolio"))
 # ✅ Redirect to your main dashboard after login

    return render_template("login.html", form=form)

@auth.route("/logout")
@login_required
def logout():
    logout_user()
    session.pop('user_id', None)
    flash("You have been logged out.", "success")
    return redirect(url_for("auth.login"))

# from flask import Blueprint, request, jsonify, redirect, url_for, flash
# from flask_login import login_user, logout_user, login_required
# from app.models.user import User
# from app import db, bcrypt

# auth = Blueprint("auth", __name__)

# # ✅ SIGNUP ROUTE (Fixed)
# @auth.route("/signup", methods=["POST"])
# def signup():
#     try:
#         data = request.get_json()
#         if not data:
#             return jsonify({"error": "Missing request data"}), 400

#         email = data.get("email")
#         username = data.get("username")
#         password = data.get("password")
#         confirm_password = data.get("confirm_password")

#         # ✅ Check for empty fields
#         if not email or not username or not password or not confirm_password:
#             return jsonify({"error": "All fields are required"}), 400

#         # ✅ Ensure passwords match
#         if password != confirm_password:
#             return jsonify({"error": "Passwords do not match"}), 400

#         # ✅ Check if user already exists
#         if User.query.filter_by(email=email).first():
#             return jsonify({"error": "Email already registered"}), 400

#         if User.query.filter_by(username=username).first():
#             return jsonify({"error": "Username already taken"}), 400

#         # ✅ Create a new user
#         new_user = User(username=username, email=email)
#         new_user.set_password(password)

#         db.session.add(new_user)
#         db.session.commit()
#         print(f"✅ User {username} signed up successfully!")

#         return jsonify({"message": "Signup successful"}), 201

#     except Exception as e:
#         db.session.rollback()
#         print(f"❌ Error in signup: {str(e)}")  # Debugging
#         return jsonify({"error": "Internal Server Error"}), 500


# # ✅ LOGIN ROUTE (Fixed)
# @auth.route("/login", methods=["POST"])
# def login():
#     try:
#         print("📌 Received Login Request")  # Debugging
#         data = request.get_json()

#         # ✅ Check for missing credentials
#         if not data or "email" not in data or "password" not in data:
#             return jsonify({"error": "Missing email or password"}), 400

#         user = User.query.filter_by(email=data["email"]).first()

#         if user and user.check_password(data["password"]):
#             login_user(user)
#             print(f"✅ User {user.username} logged in successfully!")
#             return jsonify({"message": "Login successful", "username": user.username}), 200
#         else:
#             return jsonify({"error": "Invalid credentials"}), 401

#     except Exception as e:
#         print(f"❌ Error in login: {str(e)}")  # Debugging
#         return jsonify({"error": "Internal Server Error"}), 500


# # ✅ LOGOUT ROUTE
# @auth.route("/logout", methods=["GET"])
# @login_required
# def logout():
#     logout_user()
#     print("✅ User logged out successfully!")
#     return jsonify({"message": "Logout successful"}), 200
