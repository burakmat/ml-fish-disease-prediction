from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ml_model.apps import model
import json

# Create your views here.
@csrf_exempt
def predict(request):
    if request.method == 'POST':
        jsonResponse = json.loads(request.body.decode('utf-8'))
        prediction = model.make_prediction(jsonResponse)
        print("***", prediction, "***")
        return JsonResponse({"prediction": prediction})
    else:
        return JsonResponse({"error": "POST request required."})