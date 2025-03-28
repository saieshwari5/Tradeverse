from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
from apscheduler.triggers.interval import IntervalTrigger
from flask import current_app
from .nse import fetch_bhavcopy
from .tasks import update_leaderboard  # This import should now work
import logging

# Set APScheduler logging to ERROR level to suppress most messages
logging.getLogger('apscheduler').setLevel(logging.ERROR)

def start_scheduler(app):
    scheduler = BackgroundScheduler(daemon=True)  # Add daemon=True for background running

    # Wrap fetch_bhavcopy in app context
    def run_fetch_bhavcopy():
        with app.app_context():
            try:
                fetch_bhavcopy()
            except Exception as e:
                pass

    # Wrap update_leaderboard in app context
    def run_update_leaderboard():
        with app.app_context():
            try:
                update_leaderboard()
            except Exception as e:
                pass

    # Ensure no duplicate jobs exist
    scheduler.remove_all_jobs()

    # Run fetch_bhavcopy at 00:01 AM daily
    scheduler.add_job(
        run_fetch_bhavcopy,
        trigger=CronTrigger(hour=0, minute=1),
        id="fetch_bhavcopy",
        replace_existing=True
    )

    # Run update_leaderboard every 10 seconds
    scheduler.add_job(
        run_update_leaderboard,
        trigger=IntervalTrigger(seconds=10),
        id="update_leaderboard",
        replace_existing=True
    )

    try:
        scheduler.start()
    except Exception as e:
        pass