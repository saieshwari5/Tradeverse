from flask import Blueprint, render_template, redirect, url_for, flash
from flask_login import login_user, logout_user, login_required
from app import db
from app.models.user import User
from app.forms.auth_forms import SignupForm, LoginForm

auth = Blueprint("auth", __name__)

@auth.route("/signup", methods=["GET", "POST"])
def signup():
    form = SignupForm()
    if form.validate_on_submit():
        existing_user = User.query.filter_by(email=form.email.data).first()
        if existing_user:
            flash("Email already exists. Please log in.", "danger")
            return redirect(url_for("auth.login"))

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

@auth.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    print("Login form accessed")  # Debug

    if form.validate_on_submit():
        print("Form validated")  # Debug
        user = User.query.filter_by(email=form.email.data).first()

        if user and user.check_password(form.password.data):
            print("User authenticated")  # Debug
            login_user(user)
            flash("Logged in successfully!", "success")

            # Redirect to dashboard or homepage
            return redirect(url_for("auth.dashboard"))  # Change to correct route
        else:
            print("Invalid credentials")  # Debug
            flash("Invalid email or password", "danger")

    print("Re-rendering login page")  # Debug
    return render_template("login.html", form=form)


@auth.route("/logout")
@login_required
def logout():
    logout_user()
    flash("You have been logged out.", "success")
    return redirect(url_for("auth.login"))


@auth.route("/dashboard")
@login_required
def dashboard():
    return "Welcome to your dashboard!"
