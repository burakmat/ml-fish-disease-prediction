from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .ml.model_helper import ModelHelper

# Create your views here.
@csrf_exempt
def predict(request):
    print("predict")
    print("**", request.method, "**")
    print("**", request.body, "**")
    if request.method == 'POST':
        # model = ModelHelper()
        # prediction = model.make_prediction([1, 2 ,3])
        return HttpResponse(request.body)
    else:
        return JsonResponse({"error": "POST request required."})