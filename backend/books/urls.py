
from django.urls import path
from . import views

urlpatterns = [
    path('api/books/', views.BookList.as_view(), name='book-list'),
]
