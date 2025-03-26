from flask import Flask
from routes.api_routes import api_routes
from progress import progress_bp
from flask_cors import CORS
CORS(app)


app = Flask(__name__)

app.register_blueprint(progress_bp, url_prefix="/progress")  # ✅ This ensures the correct API path

app = Flask(__name__)
app.register_blueprint(api_routes)  # Register API routes

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Make sure it runs on 5000
