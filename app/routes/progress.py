# # #if i take the default value data 

# # from flask_cors import cross_origin
# # import pandas as pd
# # from flask import Flask, jsonify,Blueprint
# # from app import db
# # from app.models.transaction import Transaction
# # from flask_login import  current_user

# # progress = Blueprint("progress", __name__)

# # #-----------------------------------------------------

# # # def get_portfolio_progress(user_id):
# # #     """Fetch transactions for a user and compute portfolio value over time."""
# # #     transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()
    
# # #     data = []
# # #     portfolio_value = 0  # Running portfolio value
    
# # #     for txn in transactions:
# # #         value = txn.quantity * txn.price
# # #         if txn.order_type.upper() == "BUY":
# # #             portfolio_value += value
# # #         elif txn.order_type.upper() == "SELL":
# # #             portfolio_value -= value

# # #         data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

# # #     return pd.DataFrame(data)


# # #-----------------------------------------------------
# # def get_portfolio_progress(user_id):
# #     transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()

# #     print("📌 Transactions for user:", user_id)
# #     for txn in transactions:
# #         print(f"Type: {txn.order_type}, Symbol: {txn.symbol}, Quantity: {txn.quantity}, Price: {txn.price}")

# #     data = []
# #     portfolio_value = 0  

# #     for txn in transactions:
# #         value = txn.quantity * txn.price
# #         if txn.order_type.upper() == "BUY":
# #             portfolio_value += value
# #         elif txn.order_type.upper() == "SELL":
# #             portfolio_value -= value

# #         data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

# #     print("📌 Portfolio Data:", data)  # ✅ Print calculated data before returning
# #     return pd.DataFrame(data)


# # #-----------------------------------------------------


# # # from flask_login import login_required, current_user
# # # from flask import request

# # # @progress.route("/portfolio_progress", methods=["GET","POST"])
# # # @login_required
# # # def portfolio_progress():
# # #     df = get_portfolio_progress(current_user.id)  # Get data for the logged-in user
# # #     print("Portfolio Data:", df.to_dict(orient="records"))
# # #     return jsonify(df.to_dict(orient="records"))

# # #----------------------------------------------------
# # # from flask import request

# # # @progress.route("/portfolio_progress", methods=["GET", "POST"])
# # # # @login_required
# # # def portfolio_progress():
# # #     if request.content_type != "application/json":
# # #         return jsonify({"error": "Content-Type must be application/json"}), 415

# # #     try:
# # #         data = request.get_json()  # Parse JSON request
# # #         if not data:
# # #             return jsonify({"error": "Empty JSON payload"}), 400

# # #         df = get_portfolio_progress(current_user.id)
# # #         return jsonify(df.to_dict(orient="records"))

# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # #----------------------------------------------------

# # # @progress.route("/portfolio_progress", methods=["GET"])
# # # @login_required
# # # def portfolio_progress():
# # #     print("📌 Current User ID:", current_user.id)  # Debugging print

# # #     df = get_portfolio_progress(current_user.id)
# # #     return jsonify(df.to_dict(orient="records"))

# # #---------------------------------------------------------

# # @progress.route("/portfolio_progress", methods=["GET"])
# # def portfolio_progress():
# #     # Sample response - Replace with actual logic
# #     data = [
# #         {"date": "2025-03-01", "value": 1000},
# #         {"date": "2025-03-02", "value": 1050},
# #         {"date": "2025-03-03", "value": 1100},
# #     ]
# #     return jsonify(data)




# # # # @progress.route('/portfolio_progress', methods=['GET'])
# # # # @cross_origin()
# # # # def portfolio_progress():
# # # #     # Directly fetch all transactions without authentication
# # # #     transactions = Transaction.query.all()  
    
# # # #     portfolio_data = []
# # # #     for transaction in transactions:
# # # #         portfolio_data.append({
# # # #             "date": transaction.date.strftime("%Y-%m-%d"), 
# # # #             "value": transaction.price * transaction.quantity
# # # #         })
    
# # # #     return jsonify(portfolio_data)

# # # @progress.route('/api/portfolio_progress', methods=['GET'])
# # # def portfolio_progress():
# # #     transactions = Transaction.query.all()
# # #     portfolio_data = [
# # #         {"date": txn.date.strftime("%Y-%m-%d"), "value": txn.price * txn.quantity}
# # #         for txn in transactions
# # #     ]
# # #     return jsonify(portfolio_data)



# # #---------------------------------------------------------


# from flask_cors import cross_origin
# import pandas as pd
# from flask import Flask, jsonify, Blueprint
# from app import db
# from app.models.transaction import Transaction
# from flask_login import current_user, login_required  # Ensure user authentication

# progress = Blueprint("progress", __name__)

# # def get_portfolio_progress(user_id):
# #     """Fetch transactions for a user and compute portfolio value over time."""
# #     transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()

# #     if not transactions:
# #         return []  # Return an empty list if no transactions are found

# #     print("📌 Transactions for user:", user_id)
# #     for txn in transactions:
# #         print(f"Type: {txn.order_type}, Symbol: {txn.symbol}, Quantity: {txn.quantity}, Price: {txn.price}")

# #     data = []
# #     portfolio_value = 0  

# #     for txn in transactions:
# #         value = txn.quantity * txn.price
# #         if txn.order_type.upper() == "BUY":
# #             portfolio_value += value
# #         elif txn.order_type.upper() == "SELL":
# #             portfolio_value -= value

# #         data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

# #     print("📌 Portfolio Data:", data)  # ✅ Debugging Output
# #     return data  # ✅ Return a list, not a DataFrame


# def get_portfolio_progress(user_id):
#     transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()

#     if not transactions:
#         print("⚠️ No transactions found for user:", user_id)
#         return []  # Return an empty list instead of DataFrame

#     portfolio_value = 0
#     data = []

#     for txn in transactions:
#         value = txn.quantity * txn.price
#         portfolio_value += value if txn.order_type.upper() == "BUY" else -value
#         data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

#     print("📌 Portfolio Data:", data)
#     return data  # ✅ Return JSON-compatible list


# @progress.route("/portfolio_progress", methods=["GET"])
# @login_required  # ✅ Ensure user is authenticated before accessing data
# def portfolio_progress():
#     """API to return user's portfolio progress"""
#     if not current_user.is_authenticated:
#         return jsonify({"error": "Unauthorized"}), 401  # ✅ Ensure authentication

#     user_id = current_user.id  # ✅ Get logged-in user ID
#     data = get_portfolio_progress(user_id)  # ✅ Fetch real user data

#     return jsonify(data)  # ✅ Return fetched data as JSON


from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models.transaction import Transaction

progress = Blueprint("progress", __name__)

def get_portfolio_progress(user_id):
    """Fetch transactions for a user and compute portfolio value over time."""
    transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()

    if not transactions:
        return []

    print("📌 Transactions for user:", user_id)
    
    data = []
    portfolio_value = 0  

    for txn in transactions:
        value = txn.quantity * txn.price
        if txn.order_type.upper() == "BUY":
            portfolio_value += value
        elif txn.order_type.upper() == "SELL":
            portfolio_value -= value

        data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

    print("📌 Portfolio Data:", data)  
    return data  


@progress.route("/api/portfolio_progress", methods=["GET"])
@login_required  # ✅ Ensure user is logged in
def portfolio_progress():
    """API to return user's portfolio progress"""
    if not current_user.is_authenticated:
        return jsonify({"error": "Unauthorized"}), 401

    user_id = current_user.id  
    data = get_portfolio_progress(user_id)  

    return jsonify(data)  
