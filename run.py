# from flask import Flask
# from app import create_app, db
# from flask_migrate import Migrate
# from app.routes.scheduler import start_scheduler

# app = create_app()
# migrate = Migrate(app, db)

# if __name__ == "__main__":
#     start_scheduler(app)  # Pass app instance here
#     app.run(debug=True)

from flask_migrate import upgrade
from app import create_app

app = create_app()

# Avoid direct import of db
with app.app_context():
    from app import db

if __name__ == "__main__":
    app.run(debug=True)
