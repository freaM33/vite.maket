@echo off
echo Завершение merge...
git commit -m "Merge remote changes"
echo.
echo Отправка на GitHub...
git push
echo.
echo Удаление временных файлов...
del finish-merge.bat
del commit-image.bat
echo.
echo Готово! Изображение добавлено
pause 