@echo off
echo Сборка проекта...
npm run build

echo.
echo Копирование в docs...
rmdir /s /q docs
mkdir docs
xcopy dist\* docs\ /E /I /Y

echo.
echo Добавление файлов в Git...
git add .

echo.
echo Создание коммита...
git commit -m "Update service center image to PNG"

echo.
echo Отправка на GitHub...
git push origin main

echo.
echo Готово! Изменения загружены.
pause 