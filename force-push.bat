@echo off
echo Принудительное завершение merge...
git merge --abort

echo.
echo Очистка состояния...
git reset --hard HEAD

echo.
echo Получение последних изменений...
git pull origin main

echo.
echo Пересборка проекта...
npm run build

echo.
echo Обновление папки docs...
rmdir /s /q docs
mkdir docs
xcopy dist\* docs\ /E /I /Y

echo.
echo Добавление всех файлов...
git add .

echo.
echo Создание коммита...
git commit -m "Fix service center image and update site"

echo.
echo Отправка на GitHub...
git push origin main

echo.
echo Удаление временных файлов...
del force-push.bat
del solve-merge.bat
del finish-merge.bat
del commit-image.bat
del fix-image.bat

echo.
echo Готово! Все изменения загружены на GitHub
pause 