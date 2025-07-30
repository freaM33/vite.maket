@echo off
echo Загрузка проекта на GitHub...
echo.

echo Добавление файлов в Git...
git add .

echo.
echo Создание коммита...
git commit -m "Initial commit: Vite 3 service center project"

echo.
echo Добавление удаленного репозитория...
git remote add origin https://github.com/freaM33/vite.maket.git

echo.
echo Переименование ветки в main...
git branch -M main

echo.
echo Отправка на GitHub...
git push -u origin main

echo.
echo Готово! Проект загружен на GitHub.
echo Ссылка: https://github.com/freaM33/vite.maket.git
pause 