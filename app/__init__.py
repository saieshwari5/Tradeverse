from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from config import Config

db = SQLAlchemy()  # Only one instance, initialized below
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    app.config.from_object(Config)

    # Initialize extensions with the app
    db.init_app(app)  # Properly initialized
    bcrypt.init_app(app)
    login_manager.init_app(app)

    # Import models AFTER initializing db to avoid circular imports
    with app.app_context():
        from app.models.user import User  
        db.create_all()  # Ensure tables are created

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))  # Ensures user is loaded correctly

    login_manager.login_view = "auth.signup"
    login_manager.login_message_category = "info"

    # Import and register Blueprints AFTER app is initialized
    from app.routes import register_blueprints
    register_blueprints(app)

    return app
