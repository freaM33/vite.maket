@echo off
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
git commit -m "Fix GitHub Pages paths - use root base"

echo.
echo Отправка на GitHub...
git push

echo.
echo Удаление временных файлов...
del rebuild.bat
del finish.bat

echo.
echo Готово! Теперь настройте GitHub Pages для использования папки docs
pause 