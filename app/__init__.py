


# # recent one

# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
# from flask_migrate import Migrate
# from flask_apscheduler import APScheduler
# from flask_cors import CORS  # Import CORS
# from flask_session import Session  # (Optional: if using Flask-Session)
# from config import Config

# # Initialize Flask extensions
# db = SQLAlchemy()
# bcrypt = Bcrypt()
# login_manager = LoginManager()
# scheduler = APScheduler()
# migrate = None  # Will be initialized inside `create_app()`
# sess = Session()  # Optional: Initialize Flask-Session if you need session persistence

# def create_app():
#     app = Flask(__name__, template_folder="templates", static_folder="static")
#     app.config.from_object(Config)

#     # Ensure session persists across redirects
#     app.config["SESSION_PERMANENT"] = False

#     # (Optional) Configure Flask-Session if required by your setup
#     # app.config["SESSION_TYPE"] = "filesystem"
#     # sess.init_app(app)

#     # Initialize Flask extensions
#     db.init_app(app)
#     bcrypt.init_app(app)
#     login_manager.init_app(app)
    
#     # Enable CORS for frontend API calls (with credentials support)
#     CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

#     global migrate
#     migrate = Migrate(app, db)  # Initialize Flask-Migrate

#     # Initialize APScheduler
#     scheduler.init_app(app)
#     scheduler.start()

#     with app.app_context():
#         # Import models
#         from app.models.user import User
#         from app.models.leaderboard import Leaderboard
#         from app.models.bhavcopy import BhavCopy
#         from app.models.transaction import Transaction  # Ensure transactions exist
#         from app.tasks import update_leaderboard

#         # Import and register Blueprints
#         from app.routes.auth import auth
#         from app.routes.leaderboard import leaderboard_bp
#         from app.routes.progress import progress

#         app.register_blueprint(auth, url_prefix="/auth")  # User authentication
#         app.register_blueprint(leaderboard_bp, url_prefix="/api")
#         app.register_blueprint(progress, url_prefix="/api")

#         # (Optional) Add the scheduled job after scheduler is started
#         # scheduler.add_job(
#         #     id="update_leaderboard",
#         #     func=update_leaderboard,
#         #     args=[app],
#         #     trigger="interval",
#         #     seconds=5
#         # )

#     # User Loader Function for Flask-Login
#     @login_manager.user_loader
#     def load_user(user_id):
#         from app.models.user import User
#         return User.query.get(int(user_id))

#     login_manager.login_view = "auth.signup"
#     login_manager.login_message_category = "info"

#     # Debugging: Print all registered routes
#     print(app.url_map)

#     return app


from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    app.config['SECRET_KEY'] = 'your_secret_key'  # Ensure this is set
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Update to match your database
    app.config['SESSION_PERMANENT'] = False  # Ensure session persistence

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)

    login_manager.login_view = "auth.login"  # Redirect to login page if not authenticated
    login_manager.login_message_category = "info"

    from app.routes.auth import auth
    from app.routes.progress import progress  # Import progress route

    app.register_blueprint(auth, url_prefix="/auth")
    app.register_blueprint(progress, url_prefix="/progress")

    @login_manager.user_loader
    def load_user(user_id):
        from app.models.user import User
        return User.query.get(int(user_id))

    return app