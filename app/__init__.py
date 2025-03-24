# # from flask import Flask
# # from flask_sqlalchemy import SQLAlchemy
# # from flask_bcrypt import Bcrypt
# # from flask_login import LoginManager
# # from flask_migrate import Migrate
# # from flask_apscheduler import APScheduler  # Use Flask-APScheduler
# # from config import Config
# # from app.routes.leaderboard import leaderboard_bp

# # db = SQLAlchemy()
# # bcrypt = Bcrypt()
# # login_manager = LoginManager()
# # scheduler = APScheduler()  # Initialize APScheduler

# # def create_app():
# #     app = Flask(__name__, template_folder="templates", static_folder="static")
# #     app.config.from_object(Config)

# #     app.register_blueprint(leaderboard_bp, url_prefix="/api")

    
# #     # Ensure session persists across redirects
# #     app.config["SESSION_PERMANENT"] = False  

# #     # Initialize extensions
# #     db.init_app(app)
# #     bcrypt.init_app(app)
# #     login_manager.init_app(app)
# #     migrate = Migrate(app, db)

# #     # Initialize APScheduler BEFORE adding jobs
# #     scheduler.init_app(app)
# #     scheduler.start()

# #     # Import models and functions INSIDE app context to avoid circular imports
# #     with app.app_context():
# #         from app.models.user import User
# #         from app.models.leaderboard import Leaderboard
# #         from app.models.bhavcopy import BhavCopy
# #         from app.tasks import update_leaderboard  # Import update_leaderboard

# #         # Add the scheduled job (AFTER scheduler is started)
# #     # Pass app instance to the job
# #         scheduler.add_job(
# #             id="update_leaderboard",
# #             func=update_leaderboard,
# #             args=[app],  # Pass app as an argument
# #             trigger="interval",
# #             seconds=5
# #         )

# #     # Register Blueprints
# #     from app.routes import register_blueprints
# #     register_blueprints(app)

# #     # User Loader Function for Flask-Login
# #     @login_manager.user_loader
# #     def load_user(user_id):
# #         return User.query.get(int(user_id))

# #     login_manager.login_view = "auth.signup"
# #     login_manager.login_message_category = "info"

# #     return app

# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
# from flask_migrate import Migrate
# from flask_apscheduler import APScheduler
# from config import Config

# # Initialize extensions
# db = SQLAlchemy()
# bcrypt = Bcrypt()
# login_manager = LoginManager()
# scheduler = APScheduler()

# def create_app():
#     app = Flask(__name__, template_folder="templates", static_folder="static")
#     app.config.from_object(Config)

#     # Ensure session persists across redirects
#     app.config["SESSION_PERMANENT"] = False

#     # Initialize extensions BEFORE importing models
#     db.init_app(app)
#     bcrypt.init_app(app)
#     login_manager.init_app(app)
#     migrate = Migrate(app, db)

#     # Initialize APScheduler
#     scheduler.init_app(app)
#     scheduler.start()

#     # with app.app_context():
#     #     # Import models and functions INSIDE app context
#     #     from app.models.user import User
#     #     from app.models.leaderboard import Leaderboard
#     #     from app.models.bhavcopy import BhavCopy
#     #     from app.tasks import update_leaderboard

#     #     # Import blueprints inside app context to avoid circular imports
#     #     from app.routes.auth import auth
#     #     from app.routes.leaderboard import leaderboard_bp
#     #     from app.routes.progress import progress

#     #     # Register blueprints AFTER ensuring they are available
#     #     app.register_blueprint(auth, url_prefix="/api/auth")
#     #     app.register_blueprint(leaderboard_bp, url_prefix="/api")
#     #     app.register_blueprint(progress, url_prefix="/api")

#     #     # Add the scheduled job (AFTER scheduler is started)
#     #     scheduler.add_job(
#     #         id="update_leaderboard",
#     #         func=update_leaderboard,
#     #         args=[app],
#     #         trigger="interval",
#     #         seconds=5
#     #     )

#     with app.app_context():
#     # Import models and functions INSIDE app context
#         from app.models.user import User
#         from app.models.leaderboard import Leaderboard
#         from app.models.bhavcopy import BhavCopy
#         from app.tasks import update_leaderboard

#         # Import blueprints INSIDE app context to avoid circular imports
#         from app.routes.auth import auth  # Import your auth Blueprint
#         from app.routes.leaderboard import leaderboard_bp
#         from app.routes.progress import progress

#         # Register blueprints AFTER ensuring they are available
#         app.register_blueprint(auth, url_prefix="/auth")  # ✅ Register auth blueprint
#         app.register_blueprint(leaderboard_bp, url_prefix="/api")
#         app.register_blueprint(progress, url_prefix="/api")

#         # Add the scheduled job (AFTER scheduler is started)
#         scheduler.add_job(
#             id="update_leaderboard",
#             func=update_leaderboard,
#             args=[app],
#             trigger="interval",
#             seconds=5
#         )


#     # User Loader Function for Flask-Login
#     @login_manager.user_loader
#     def load_user(user_id):
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
from flask_migrate import Migrate
from flask_apscheduler import APScheduler
from flask_cors import CORS
from config import Config

# Initialize Flask extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()
login_manager.login_view = "auth.login"
scheduler = APScheduler()
migrate = None  # Will be initialized inside `create_app()`

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    app.config.from_object(Config)

    # Ensure session persists across redirects
    app.config["SESSION_PERMANENT"] = False

    # Initialize Flask extensions
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    CORS(app, supports_credentials=True)  # Enable CORS for frontend API calls

    global migrate
    migrate = Migrate(app, db)  # Initialize Flask-Migrate

    # Initialize APScheduler
    scheduler.init_app(app)
    scheduler.start()

    with app.app_context():
        # Import models
        from app.models.user import User
        from app.models.leaderboard import Leaderboard
        from app.models.bhavcopy import BhavCopy
        from app.models.transaction import Transaction  # Ensure transactions exist
        from app.tasks import update_leaderboard

        # Import and register Blueprints
        from app.routes.auth import auth
        from app.routes.leaderboard import leaderboard_bp
        from app.routes.progress import progress

        app.register_blueprint(auth, url_prefix="/auth")  # User authentication
        app.register_blueprint(leaderboard_bp, url_prefix="/api")
        app.register_blueprint(progress, url_prefix="/api")

        # Add the scheduled job (AFTER scheduler is started)
        # scheduler.add_job(
        #     id="update_leaderboard",
        #     func=update_leaderboard,
        #     args=[app],
        #     trigger="interval",
        #     seconds=5
        # )

    # User Loader Function for Flask-Login
    @login_manager.user_loader
    def load_user(user_id):
        from app.models.user import User
        return User.query.get(int(user_id))

    login_manager.login_view = "auth.signup"
    login_manager.login_message_category = "info"

    # Debugging: Print all registered routes
    print(app.url_map)

    return app
