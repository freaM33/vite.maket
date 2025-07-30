@echo off
echo Пересборка проекта с правильными путями...
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
git add docs/

echo.
echo Создание коммита...
git commit -m "Fix paths for GitHub Pages - use /vite.maket/ base"

echo.
echo Отправка на GitHub...
git push

echo.
echo Готово! Проверьте сайт через 5-10 минут
pause 