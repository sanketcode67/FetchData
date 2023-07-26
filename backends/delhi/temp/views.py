from django.shortcuts import render
from django.http import JsonResponse
import random

def getTempView(request):

    data = {
        "city": "Delhi",
        "temperature" : f"{generateTemp()} celsius"
    }

    return JsonResponse(data)


# it generates temp in a range
def generateTemp():
    minTemp = 20.0
    maxTemp = 48.0

    temp = round(random.uniform(minTemp, maxTemp),2)
    return temp
