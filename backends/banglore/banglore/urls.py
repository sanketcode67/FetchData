
from django.contrib import admin
from django.urls import path
from temp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('data/',views.getTempView, name="getTempView")
]
