from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

db = SQLAlchemy()
login_manager = LoginManager()

def format_currency(value):
    return "{:,.2f}".format(value)

def create_app():
    app = Flask(__name__)
    
    # Configure your app
    app.config['SECRET_KEY'] = 'your-secret-key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tradeverse.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)
    Migrate(app, db)
    
    # Initialize Flask-Login
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'
    
    # Register blueprints
    from .routes.auth import auth
    from .routes.main import main  # Updated import
    app.register_blueprint(auth)
    app.register_blueprint(main)  # Updated registration
    
    # Register custom filters
    app.jinja_env.filters['format_currency'] = format_currency
    
    return app

@login_manager.user_loader
def load_user(user_id):
    from .models import User
    return User.query.get(int(user_id))
