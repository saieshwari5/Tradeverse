from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate  # Import Flask-Migrate
from config import Config

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)

    migrate = Migrate(app, db)  # Initialize Flask-Migrate

    with app.app_context():
        from app.models.user import User  
        db.create_all()  

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    login_manager.login_view = "auth.signup"
    login_manager.login_message_category = "info"

    from app.routes import register_blueprints
    register_blueprints(app)

    return app
