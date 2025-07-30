Write-Host "Загрузка проекта на GitHub..." -ForegroundColor Green
Write-Host ""

Write-Host "Добавление файлов в Git..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Создание коммита..." -ForegroundColor Yellow
git commit -m "Initial commit: Vite 3 service center project"

Write-Host ""
Write-Host "Добавление удаленного репозитория..." -ForegroundColor Yellow
git remote add origin https://github.com/freaM33/vite.maket.git

Write-Host ""
Write-Host "Переименование ветки в main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "Отправка на GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "Готово! Проект загружен на GitHub." -ForegroundColor Green
Write-Host "Ссылка: https://github.com/freaM33/vite.maket.git" -ForegroundColor Cyan
Write-Host ""
Read-Host "Нажмите Enter для продолжения..." 