from flask import Blueprint, render_template, redirect, url_for, request, flash, jsonify
from flask_login import login_user, logout_user, login_required
from ..models import db, User
from ..forms import LoginForm, SignupForm
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user)
            # Change main_bp.dashboard to main.dashboard
            return redirect(url_for('main.dashboard'))
        flash('Invalid email or password', 'error')
    return render_template('login.html', form=form)

from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash
from .. import db
from ..models import User
from ..forms import SignupForm

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignupForm()
    if request.method == 'POST':
        print("Form data received:", request.form)  # Debug print
        
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        
        if not all([username, email, password]):
            flash('All fields are required', 'error')
            return render_template('signup.html', form=form)
        
        try:
            # Check if user already exists
            if User.query.filter_by(email=email).first():
                flash('Email already registered', 'error')
                return render_template('signup.html', form=form)
            
            if User.query.filter_by(username=username).first():
                flash('Username already taken', 'error')
                return render_template('signup.html', form=form)
            
            # Create new user
            new_user = User(
                username=username,
                email=email,
                balance=1000.0
            )
            new_user.password_hash = generate_password_hash(password)
            
            # Save to database
            db.session.add(new_user)
            db.session.commit()
            
            print(f"New user created: {username}")  # Debug print
            flash('Registration successful! Please login.', 'success')
            return redirect(url_for('auth.login'))
            
        except Exception as e:
            db.session.rollback()
            print(f"Error during signup: {str(e)}")  # Debug print
            flash('An error occurred during registration', 'error')
    
    return render_template('signup.html', form=form)

@auth.route('/check_username')
def check_username():
    username = request.args.get('username', '')
    user = User.query.filter_by(username=username).first()
    if user:
        return jsonify({'message': 'Username already taken', 'color': 'red'})
    return jsonify({'message': 'Username available', 'color': 'green'})

@auth.route('/check_email')
def check_email():
    email = request.args.get('email', '')
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({'message': 'Email already registered', 'color': 'red'})
    return jsonify({'message': 'Email available', 'color': 'green'})

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))
