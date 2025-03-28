from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required, current_user

main = Blueprint('main', __name__)

@main.route('/')
def index():
    if current_user.is_authenticated:
        return redirect(url_for('main.dashboard'))
    return render_template('index.html')

@main.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@main.route('/portfolio')
@login_required
def portfolio():
    return render_template('portfolio.html')

@main.route('/orders')
@login_required
def orders():
    return render_template('orders.html')

@main.route('/transactions')
@login_required
def transactions():
    return render_template('transactions.html')

@main.route('/leaderboard')
@login_required
def leaderboard():
    return render_template('leaderboard.html')

@main.route('/profile')  # Changed from main_bp to main
@login_required
def profile():
    return render_template('profile.html')
