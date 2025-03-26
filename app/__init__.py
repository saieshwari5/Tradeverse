# from flask import Flask, redirect, url_for
# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
# from flask_migrate import Migrate
# from flask_apscheduler import APScheduler  
# from config import Config

# db = SQLAlchemy()
# bcrypt = Bcrypt()
# login_manager = LoginManager()
# scheduler = APScheduler()

# def create_app():
#     app = Flask(__name__, template_folder="templates", static_folder="static")
#     app.config.from_object(Config)

#     db.init_app(app)
#     bcrypt.init_app(app)
#     login_manager.init_app(app)
#     migrate = Migrate(app, db)
#     scheduler.init_app(app)
#     scheduler.start()

#     with app.app_context():
#         # ✅ Import models inside app context to avoid circular imports
#         from app.models.user import User
#         from app.models.leaderboard import Leaderboard
#         from app.models.bhavcopy import BhavCopy

#         # ✅ Import routes inside app context to avoid circular imports
#         from app.routes import register_blueprints
#         register_blueprints(app)

#     @app.route("/")
#     def home():
#         return redirect(url_for("auth.login"))  # Fixes 404 error for the homepage

#     @login_manager.user_loader
#     def load_user(user_id):
#         return User.query.get(int(user_id))

#     login_manager.login_view = "auth.signup"
#     login_manager.login_message_category = "info"

#     return app

# # from flask import Flask
# # from flask_sqlalchemy import SQLAlchemy
# # from flask_bcrypt import Bcrypt
# # from flask_login import LoginManager

# # db = SQLAlchemy()
# # bcrypt = Bcrypt()
# # login_manager = LoginManager()

# # def create_app():
# #     app = Flask(__name__, template_folder="templates", static_folder="static")
# #     app.config['SECRET_KEY'] = 'your_secret_key'  # Ensure this is set
# #     app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Update to match your database
# #     app.config['SESSION_PERMANENT'] = False  # Ensure session persistence

# #     db.init_app(app)
# #     bcrypt.init_app(app)
# #     login_manager.init_app(app)

# #     login_manager.login_view = "auth.login"  # Redirect to login page if not authenticated
# #     login_manager.login_message_category = "info"

# #     from app.routes.auth import auth
# #     from app.routes.progress import progress  # Import progress route

# #     app.register_blueprint(auth, url_prefix="/auth")
# #     app.register_blueprint(progress, url_prefix="/progress")

# #     @login_manager.user_loader
# #     def load_user(user_id):
# #         from app.models.user import User
# #         return User.query.get(int(user_id))

# #     return app


from flask import Flask, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_apscheduler import APScheduler  
from config import Config
from flask_cors import CORS  # ✅ Import CORS

db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()
scheduler = APScheduler()

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    
    app.config.from_object(Config)
    CORS(app, resources={r"/*": {"origins": "*"}})

    #CORS(app)  # ✅ Enable CORS for all routes
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    migrate = Migrate(app, db)
    scheduler.init_app(app)
    scheduler.start()

    with app.app_context():
        # ✅ Import models inside app context
        from app.models.user import User
        from app.models.leaderboard import Leaderboard
        from app.models.bhavcopy import BhavCopy
        from app.models.portfolio import Portfolio  # ✅ Added Portfolio Model

        # ✅ Import and register routes
        from app.routes import register_blueprints
        register_blueprints(app)

    @app.route("/")
    def home():
        return redirect(url_for("auth.login"))

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    login_manager.login_view = "auth.signup"
    login_manager.login_message_category = "info"

    return app
