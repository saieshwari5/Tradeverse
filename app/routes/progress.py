import pandas as pd
from flask import Flask, jsonify,Blueprint
from app import db
from app.models.transaction import Transaction
from flask_login import login_required, current_user

progress = Blueprint("progress", __name__)

#-----------------------------------------------------

# def get_portfolio_progress(user_id):
#     """Fetch transactions for a user and compute portfolio value over time."""
#     transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()
    
#     data = []
#     portfolio_value = 0  # Running portfolio value
    
#     for txn in transactions:
#         value = txn.quantity * txn.price
#         if txn.order_type.upper() == "BUY":
#             portfolio_value += value
#         elif txn.order_type.upper() == "SELL":
#             portfolio_value -= value

#         data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

#     return pd.DataFrame(data)


#-----------------------------------------------------
def get_portfolio_progress(user_id):
    transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()

    print("📌 Transactions for user:", user_id)
    for txn in transactions:
        print(f"Type: {txn.order_type}, Symbol: {txn.symbol}, Quantity: {txn.quantity}, Price: {txn.price}")

    data = []
    portfolio_value = 0  

    for txn in transactions:
        value = txn.quantity * txn.price
        if txn.order_type.upper() == "BUY":
            portfolio_value += value
        elif txn.order_type.upper() == "SELL":
            portfolio_value -= value

        data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

    print("📌 Portfolio Data:", data)  # ✅ Print calculated data before returning
    return pd.DataFrame(data)


#-----------------------------------------------------


# from flask_login import login_required, current_user
# from flask import request

# @progress.route("/portfolio_progress", methods=["GET","POST"])
# @login_required
# def portfolio_progress():
#     df = get_portfolio_progress(current_user.id)  # Get data for the logged-in user
#     print("Portfolio Data:", df.to_dict(orient="records"))
#     return jsonify(df.to_dict(orient="records"))

#----------------------------------------------------
# from flask import request

# @progress.route("/portfolio_progress", methods=["GET", "POST"])
# # @login_required
# def portfolio_progress():
#     if request.content_type != "application/json":
#         return jsonify({"error": "Content-Type must be application/json"}), 415

#     try:
#         data = request.get_json()  # Parse JSON request
#         if not data:
#             return jsonify({"error": "Empty JSON payload"}), 400

#         df = get_portfolio_progress(current_user.id)
#         return jsonify(df.to_dict(orient="records"))

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500



@progress.route("/portfolio_progress", methods=["POST"])
@login_required
def portfolio_progress():
    print("📌 Current User ID:", current_user.id)  # Debugging print

    df = get_portfolio_progress(current_user.id)
    return jsonify(df.to_dict(orient="records"))
