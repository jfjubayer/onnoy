import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'onnoy-secret-key-change-me')
    BASE_DIR   = os.path.abspath(os.path.dirname(__file__))
    DATA_DIR   = os.path.join(BASE_DIR, 'data')
    IMPACT_FILE = os.path.join(DATA_DIR, 'impact.json')
    REQUESTS_FILE = os.path.join(DATA_DIR, 'requests.json')
    FACTCHECKS_FILE = os.path.join(DATA_DIR, 'factchecks.json')
    ADMIN_TOKEN = os.environ.get('ADMIN_TOKEN', 'onnoy-admin-dev')

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

config_by_name = {
    'dev': DevelopmentConfig,
    'prod': ProductionConfig
}
