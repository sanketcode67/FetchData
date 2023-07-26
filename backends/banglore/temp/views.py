from django.shortcuts import render
from django.http import JsonResponse
import random

def getTempView(request):

    data = {
        "city": "Bangalore",
        "temperature" : f"{generateTemp()} celsius"
    }

    return JsonResponse(data)


# it generates temp in a range
def generateTemp():
    minTemp = 10.0
    maxTemp = 37.0

    temp = round(random.uniform(minTemp, maxTemp),2)
    return temp

