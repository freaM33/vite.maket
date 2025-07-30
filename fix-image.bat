@echo off
echo Пересборка проекта...
npm run build

echo.
echo Удаление старой папки docs...
rmdir /s /q docs

echo.
echo Создание новой папки docs...
mkdir docs

echo.
echo Копирование файлов из dist в docs...
xcopy dist\* docs\ /E /I /Y

echo.
echo Добавление файлов в Git...
git add .

echo.
echo Создание коммита...
git commit -m "Fix service center image - replace with lightweight placeholder"

echo.
echo Отправка на GitHub...
git push

echo.
echo Удаление временных файлов...
del fix-image.bat

echo.
echo Готово! Изображение исправлено
pause 