import logging

def configure_logging():
    # Set APScheduler logging to ERROR level
    logging.getLogger('apscheduler').setLevel(logging.ERROR)
    
    # Set Werkzeug (Flask's WSGI library) logging to ERROR
    logging.getLogger('werkzeug').setLevel(logging.ERROR)