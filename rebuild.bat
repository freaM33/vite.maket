@echo off
echo Сборка проекта...
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
git commit -m "Update docs with correct paths"

echo.
echo Отправка на GitHub...
git push

echo.
echo Готово!
pause 