# from flask import Blueprint, jsonify
# from flask_cors import CORS
# from flask_login import current_user, login_required
# from app.models.portfolio import Portfolio  # ✅ Import Portfolio model
# from app import db

# api_routes = Blueprint("api_routes", __name__)
# CORS(api_routes) 


# @api_routes.route('/api/portfolio', methods=['GET'])
# @login_required  # Ensure only logged-in users can access this
# def get_portfolio():
#     """Fetch the logged-in user's portfolio from the database."""
#     user_id = current_user.id  # Get the currently logged-in user ID
#     portfolio_entries = Portfolio.query.filter_by(user_id=user_id).all()
    
#     portfolio_data = [
#         {
#             "id": entry.id,
#             "stock_symbol": entry.stock_symbol,
#             "quantity": entry.quantity,
#             "avg_price": entry.avg_price,
#             "total_value": entry.total_value
#         }
#         for entry in portfolio_entries
#     ]
#     return jsonify(portfolio_data)


# @api_routes.route('/api/data', methods=['GET'])
# def get_data():
#     return jsonify({"message": "Hello from Flask!"})
from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_login import login_user, logout_user, login_required
from app import db
from app.models.user import User

api_routes = Blueprint("api_routes", __name__)
bcrypt = Bcrypt()

# Signup Route
@api_routes.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
    new_user = User(username=username, email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

# Login Route
@api_routes.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password_hash, password):
        login_user(user)
        return jsonify({"message": "Login successful", "user": user.username}), 200
    return jsonify({"error": "Invalid credentials"}), 401

# Logout Route
@api_routes.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"}), 200
