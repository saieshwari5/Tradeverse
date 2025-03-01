from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import urllib.parse

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Encode password safely
db_user = os.getenv("DB_USER")
db_pass = urllib.parse.quote_plus(os.getenv("DB_PASS"))  # Encode special characters
db_host = os.getenv("DB_HOST")
db_name = os.getenv("DB_NAME")

# ✅ Change to MySQL connection string
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{db_user}:{db_pass}@{db_host}/{db_name}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize database
db = SQLAlchemy(app)


@app.route("/")
def home():
    return "Welcome to my Flask App!"

from sqlalchemy import text  # Import text from SQLAlchemy

@app.route("/check_db")
def check_db():
    try:
        db.session.execute(text("SELECT 1"))  # Use text() for raw SQL
        return "Database Connection Successful!"
    except Exception as e:
        return f"Database Connection Failed: {str(e)}"



if __name__ == "__main__":
    app.run(debug=True)
