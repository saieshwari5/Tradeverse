from flask import Blueprint, jsonify
from flask_cors import CORS

api_routes = Blueprint("api_routes", __name__)
CORS(api_routes)  # Allow frontend access

@api_routes.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})
def register_blueprints(app):
    app.register_blueprint(app)