@echo off
echo Отмена текущего merge...
git merge --abort

echo.
echo Получение изменений с GitHub...
git pull origin main

echo.
echo Добавление файлов...
git add .

echo.
echo Создание коммита...
git commit -m "Add service center placeholder image"

echo.
echo Отправка на GitHub...
git push origin main

echo.
echo Удаление временных файлов...
del solve-merge.bat
del finish-merge.bat
del commit-image.bat

echo.
echo Готово! Изображение добавлено
pause 