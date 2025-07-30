@echo off
echo Очистка swap файлов...
del .git\.MERGE_MSG.swp 2>nul

echo.
echo Отмена merge...
git merge --abort

echo.
echo Очистка состояния...
git reset --hard HEAD

echo.
echo Получение изменений...
git pull origin main

echo.
echo Пересборка проекта...
npm run build

echo.
echo Обновление docs...
rmdir /s /q docs
mkdir docs
xcopy dist\* docs\ /E /I /Y

echo.
echo Добавление файлов...
git add .

echo.
echo Коммит...
git commit -m "Fix service center image"

echo.
echo Отправка...
git push origin main

echo.
echo Очистка временных файлов...
del clean-and-push.bat
del force-push.bat

echo.
echo Готово!
pause 