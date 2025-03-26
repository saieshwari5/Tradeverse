# # from flask import Blueprint, jsonify
# # from flask_login import login_required, current_user
# # from app.models.transaction import Transaction
# # from datetime import datetime
# # import pandas as pd

# # progress = Blueprint("progress", __name__)

# # def calculate_portfolio_value(transactions):
# #     """Calculate cumulative portfolio value over time"""
# #     if not transactions:
# #         return []

# #     # Convert to DataFrame for easy time series handling
# #     df = pd.DataFrame([{
# #         'date': txn.timestamp,
# #         'value': txn.quantity * txn.price * (1 if txn.order_type.upper() == 'BUY' else -1)
# #     } for txn in transactions])

# #     # Calculate running sum
# #     df['cumulative'] = df['value'].cumsum()
    
# #     # Convert to list of dicts
# #     return [{
# #         'date': row['date'].strftime('%Y-%m-%d'),
# #         'value': round(row['cumulative'], 2)
# #     } for _, row in df.iterrows()]

# # @progress.route("/portfolio_progress", methods=["GET"])
# # @login_required
# # def portfolio_progress():
# #     """Endpoint to get portfolio value over time"""
# #     try:
# #         # Get transactions ordered by date
# #         transactions = Transaction.query.filter_by(
# #             user_id=current_user.id
# #         ).order_by(Transaction.timestamp.asc()).all()

# #         data = calculate_portfolio_value(transactions)
        
# #         return jsonify({
# #             'status': 'success',
# #             'data': data,
# #             'last_updated': datetime.utcnow().isoformat()
# #         })
    
# #     except Exception as e:
# #         return jsonify({
# #             'status': 'error',
# #             'message': str(e)
# #         }), 500


# # from flask import Blueprint, jsonify, render_template
# # from flask_login import login_required, current_user
# # from app.models.transaction import Transaction
# # from datetime import datetime

# # progress = Blueprint("progress", __name__)



# # def get_portfolio_progress(user_id):
# #     """Fetch user's portfolio transactions and calculate progress over time."""
# #     transactions = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.timestamp).all()

# #     if not transactions:
# #         return []

# #     portfolio_value = 0
# #     data = []

# #     for txn in transactions:
# #         value = txn.quantity * txn.price
# #         portfolio_value += value if txn.order_type.upper() == "BUY" else -value
# #         data.append({"date": txn.timestamp.strftime("%Y-%m-%d"), "value": portfolio_value})

# #     return data 


# # @progress.route("/portfolio_progress", methods=["GET"])
# # @login_required
# # def portfolio_page():
# #     return render_template("portfolio.html")

# # @progress.route("/portfolio_progress", methods=["GET"])
# # @login_required
# # def portfolio_progress():
# #     """API to return user's portfolio progress."""
# #     if not current_user.is_authenticated:
# #         return jsonify({"error": "Unauthorized"}), 401  

# #     user_id = current_user.id  
# #     data = get_portfolio_progress(user_id)

# #     return jsonify({"status": "success", "data": data})

# from flask import Blueprint, jsonify
# from flask_cors import CORS
# import mysql
# from app import db
# from app.models.portfolio import Portfolio
# from flask_login import login_required, current_user

# progress_bp = Blueprint('progress', __name__)
# CORS(progress_bp) 

# def get_portfolio_data():
#     try:
#         conn = mysql.connector.connect(**db)
#         cursor = conn.cursor(dictionary=True)

#         query = "SELECT stock_symbol, total_value FROM portfolio"  # Adjust table/column names as needed
#         cursor.execute(query)
#         portfolio_data = cursor.fetchall()

#         cursor.close()
#         conn.close()
#         return portfolio_data

#     except mysql.connector.Error as err:
#         print(f"Database error: {err}")
#         return []
  


# @progress_bp.route("/api/portfolio", methods=["GET"])

# def get_portfolio():
#     """Fetch user-specific portfolio details"""
#     user_portfolio = Portfolio.query.filter_by(user_id=current_user.id).all()
#     portfolio_data = [
#         {
#             "stock_symbol": stock.stock_symbol,
#             "quantity": stock.quantity,
#             "avg_price": stock.avg_price,
#             "total_value": stock.total_value,
#         }
#         for stock in user_portfolio
#     ]
#     return jsonify(portfolio_data)
from flask import jsonify
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models.portfolio import Portfolio
from app.models.transaction import Transaction
from datetime import datetime
from flask_cors import CORS
import pandas as pd
progress_bp = Blueprint('progress', __name__)
CORS(progress_bp) 

@progress_bp.route("/api/portfolio", methods=["GET"])
@login_required  # Ensure this middleware works
def get_portfolio():
    if not current_user.is_authenticated:
        return jsonify({"error": "User not authenticated"}), 401  # Explicit error message

    user_portfolio = Portfolio.query.filter_by(user_id=current_user.id).all()
    portfolio_data = [
        {
            "stock_symbol": stock.stock_symbol,
            "quantity": stock.quantity,
            "avg_price": stock.avg_price,
            "total_value": stock.total_value,
        }
        for stock in user_portfolio
    ]
    return jsonify(portfolio_data)
