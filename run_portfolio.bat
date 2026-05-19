@echo off
cd /d "%~dp0"
echo Starting Django portfolio website...
echo.
echo Open this URL in your browser:
echo http://127.0.0.1:8000/
echo.
"C:\Users\User\AppData\Local\Programs\Python\Python312\python.exe" manage.py runserver 127.0.0.1:8000
pause
