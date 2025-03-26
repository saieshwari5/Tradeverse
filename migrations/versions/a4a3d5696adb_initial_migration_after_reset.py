"""Initial migration after reset

Revision ID: a4a3d5696adb
Revises: 
Create Date: 2025-03-25 22:57:20.098758

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'a4a3d5696adb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('bhav_copy', schema=None) as batch_op:
        batch_op.drop_index('symbol')
        batch_op.drop_column('change')

    with op.batch_alter_table('leaderboard', schema=None) as batch_op:
        batch_op.create_unique_constraint(None, ['user_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('leaderboard', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')

    with op.batch_alter_table('bhav_copy', schema=None) as batch_op:
        batch_op.add_column(sa.Column('change', mysql.FLOAT(), nullable=True))
        batch_op.create_index('symbol', ['symbol'], unique=True)

    # ### end Alembic commands ###
