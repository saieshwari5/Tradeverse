from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from config import Config
from app.models.user import User  # Import your User model

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app():
    app = Flask(
        __name__, 
        template_folder="templates",
        static_folder="static"
    )
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)

    # Set up user loader function (required for login to work)
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))  # Flask-Login needs this to retrieve users

    login_manager.login_view = "auth.signup"  # Redirect users to signup if not authenticated
    login_manager.login_message_category = "info"

    # Import and register Blueprints correctly
    from app.routes import register_blueprints
    register_blueprints(app)

    return app
