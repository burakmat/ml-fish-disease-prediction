from django.apps import AppConfig
from .ml.model_helper import ModelHelper

model = None

class MlModelConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "ml_model"

    def ready(self):
        global model
        model = ModelHelper()
        print("Model loaded")