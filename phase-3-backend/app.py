from flask import Flask
from flask_cors import CORS
from config import config_by_name
import os

def create_app(config_name='dev'):
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])
    
    # Enable CORS for frontend interaction
    CORS(app)

    # Register blueprints
    from routes.api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000)
