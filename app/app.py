from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from routes.api_routes import api_routes
from progress import progress_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/db_name'  # Update DB details
app.config['SECRET_KEY'] = 'your_secret_key'

# Initialize Extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"

# Register Blueprints
app.register_blueprint(progress_bp, url_prefix="/progress")
app.register_blueprint(api_routes, url_prefix="/api")  # Ensure API routes work

# User Loader for Login
from models.user import User
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

if __name__ == "__main__":
    app.run(debug=True, port=5000)
