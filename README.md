Aplikacja zawiera:
 -Backend Django 
 -Baze danych Sqlite
 -Frontend Angular

Po uruchomieniu serwera "python3 manage.py runserver" nalezy wykonać komendę "ng serve" w folderze Frontend

Frontend odpowiada za komunikację z serwerem, wyświetla produkty oraz kategorie. 
Klikniecie w dany wiersz tabeli kategorii wyświetla znajdujące się w niej produkty (zaimplementowane przy pomocy alertu - rozwijanie tabeli w toku).
Zaimplementowane zostaly metody CRUD.

Backend odpowiada za interfejs REST api, endpointy implementowne w pliku ProductsApp/views.py, model bazy danych w pluku models.py. Zostal zaimplementowany serializer danych.

