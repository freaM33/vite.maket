@echo off
git commit -m "Fix paths for GitHub Pages - use /vite.maket/ base"
git push
del fix-paths.bat
del final-commit.bat
echo Готово! Проверьте сайт через 5-10 минут
pause 