# # from app import bcrypt
# # from flask import Blueprint, render_template, redirect, url_for, flash, request, jsonify
# # from flask_login import login_user, logout_user, login_required
# # from app.models.user import User  # Import models before db
# # from app.forms.auth_forms import SignupForm, LoginForm
# # from app import db  # Import db after models
# # from flask import make_response

# # auth = Blueprint("auth", __name__)

# # @auth.route("/signup", methods=["GET", "POST"])
# # def signup():
# #     form = SignupForm()
# #     if form.validate_on_submit():
# #         existing_email = User.query.filter_by(email=form.email.data).first()
# #         existing_username = User.query.filter_by(username=form.username.data).first()

# #         if existing_email:
# #             flash("Email already exists. Please log in.", "danger")
# #             return redirect(url_for("auth.signup"))

# #         if existing_username:
# #             flash("Username already taken. Please choose another.", "danger")
# #             return redirect(url_for("auth.signup"))

# #         if form.password.data != form.confirm_password.data:
# #             flash("Passwords do not match. Please try again.", "danger")
# #             return redirect(url_for("auth.signup"))

# #         new_user = User(username=form.username.data, email=form.email.data)
# #         new_user.set_password(form.password.data)

# #         try:
# #             db.session.add(new_user)
# #             db.session.commit()
# #             flash("Account created successfully!", "success")
# #             return redirect(url_for("auth.login"))
# #         except Exception as e:
# #             db.session.rollback()
# #             flash(f"Error: {str(e)}", "danger")

# #     return render_template("signup.html", form=form)


# # @auth.route("/login", methods=["POST", "GET"])
# # def login():
# #     print("📌 Received Login Request:", request.method)  # Debugging
# #     data = request.get_json()

# #     if not data or "email" not in data or "password" not in data:
# #         return jsonify({"error": "Missing credentials"}), 400

# #     user = User.query.filter_by(email=data["email"]).first()

# #     if user and bcrypt.check_password_hash(user.password_hash, data["password"]):  # ✅ Change `user.password` to `user.password_hash`
# #         login_user(user)
# #         return jsonify({"message": "Login successful"}), 200
# #     else:
# #         return jsonify({"error": "Invalid credentials"}), 401

# # @auth.route("/logout")
# # @login_required
# # def logout():
# #     logout_user()
# #     flash("You have been logged out.", "success")
# #     return redirect(url_for("auth.login"))


# # @auth.route("/dashboard")
# # @login_required
# # def dashboard():
# #     return "Welcome to your dashboard!"


# # # ======= REAL-TIME VALIDATION ROUTES ======= #

# # @auth.route("/check_username")
# # def check_username():
# #     """AJAX route to check username availability."""
# #     username = request.args.get("username")
# #     existing_user = User.query.filter_by(username=username).first()
# #     if existing_user:
# #         return jsonify({"message": "Username is taken ❌", "color": "red"})
# #     return jsonify({"message": "Username is available ✅", "color": "green"})


# # @auth.route("/check_email")
# # def check_email():
# #     """AJAX route to check email availability."""
# #     email = request.args.get("email")
# #     existing_user = User.query.filter_by(email=email).first()
# #     if existing_user:
# #         return jsonify({"message": "Email already registered ❌", "color": "red"})
# #     return jsonify({"message": "Email is available ✅", "color": "green"})


# # @auth.route("/auth/check", methods=["GET"])
# # @login_required
# # def check_auth():
# #     return jsonify({"message": "Authenticated"}), 200


# # # @auth.route("/login", methods=["GET"])
# # # def login_page():
# # #     return jsonify({"message": "This endpoint only supports POST requests"}), 405


# # #above are working -------------------------



from app import bcrypt
from flask import Blueprint, render_template, redirect, session, url_for, flash, request, jsonify
from flask_login import current_user, login_user, logout_user, login_required
from app.models.user import User  # Import models before db
from app.forms.auth_forms import SignupForm, LoginForm
from app import db  # Import db after models
from flask import make_response


auth = Blueprint('auth', __name__)

@auth.route('/check_username', methods=['GET'])
def check_username():
    username = request.args.get('username', '').strip()
    
    if not username:
        return jsonify({"message": "Username is required!", "color": "red"}), 400

    user = User.query.filter_by(username=username).first()
    
    if user:
        return jsonify({"message": "Username already taken ❌", "color": "red"}), 200
    return jsonify({"message": "Username available ✅", "color": "green"}), 200


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
        new_user.set_password(form.password.data)

        try:
            db.session.add(new_user)
            db.session.commit()
            flash("Account created successfully!", "success")
            return redirect(url_for("auth.login"))
        except Exception as e:
            db.session.rollback()
            flash(f"Error: {str(e)}", "danger")

    return render_template("signup.html", form=form)


@auth.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        username = data.get('username')
        password = data.get('password')
        
        if not username or not password:
            return jsonify({"error": "Username and password required"}), 400
        
        user = User.query.filter_by(username=username).first()
        
        if not user or not bcrypt.check_password_hash(user.password_hash, password):
            return jsonify({"error": "Invalid credentials"}), 401
        
        login_user(user)
        session['user_id'] = user.id
        
        return jsonify({
            "message": "Login successful",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "balance": user.balance
            }
        }), 200
    
    elif request.method == 'GET':
        # Check authentication status
        if current_user.is_authenticated:
            return jsonify({
                "authenticated": True,
                "user": {
                    "id": current_user.id,
                    "username": current_user.username,
                    "email": current_user.email,
                    "balance": current_user.balance
                }
            }), 200
        return jsonify({"authenticated": False}), 401



# @auth.route("/login", methods=["POST", "GET"])
# def login():
#     data = request.get_json()

#     if not data or "email" not in data or "password" not in data:
#         return jsonify({"error": "Missing credentials"}), 400

#     user = User.query.filter_by(email=data["email"]).first()

#     if user and bcrypt.check_password_hash(user.password_hash, data["password"]):
#         login_user(user, remember=True)  # ✅ Ensure session persistence
#         return jsonify({"message": "Login successful", "redirect": "/progress/portfolio"}), 200
#     else:
#         return jsonify({"error": "Invalid credentials"}), 401
    
@auth.route('/logout', methods=['POST'])
@login_required  # Add this decorator
def logout():
    logout_user()  # Add this
    session.clear()
    return jsonify({"message": "Logout successful"}), 200


@auth.route('/check_email', methods=['GET'])
def check_email():
    email = request.args.get('email', '').strip()
    
    if not email:
        return jsonify({"message": "Email is required!", "color": "red"}), 400

    user = User.query.filter_by(email=email).first()
    
    if user:
        return jsonify({"message": "Email already registered ❌", "color": "red"}), 200
    return jsonify({"message": "Email available ✅", "color": "green"}), 200


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
