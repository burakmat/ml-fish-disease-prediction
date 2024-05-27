from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ml_model.apps import model
import json

# Create your views here.
@csrf_exempt
def predict(request):
    print("predict")
    print("**", request.method, "**")
    print("**", type(json.loads(request.body.decode('utf-8'))), "**")
    print("**", request.body, "**")
    jsonResponse = json.loads(request.body.decode('utf-8'))
    if request.method == 'POST':
        return JsonResponse({"response": model.make_prediction(jsonResponse)})
    else:
        return JsonResponse({"error": "POST request required."})