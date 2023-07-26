from django.shortcuts import render
from django.http import JsonResponse
import random

def getTempView(request):

    data = {
        "city": "Kolkata",
        "temperature" : f"{generateTemp()} celsius"
    }

    return JsonResponse(data)


# it generates temp in a range
def generateTemp():
    minTemp = 25.0
    maxTemp = 50.0

    temp = round(random.uniform(minTemp, maxTemp),2)
    return temp

