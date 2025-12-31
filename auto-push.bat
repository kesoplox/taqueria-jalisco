@echo off
cd /d "c:\Users\MINEDUCYT\Desktop\Taqueria Jalisco"
git pull origin main
git add .
git commit -m "Auto-commit desde VS Code"
git push origin main
echo Cambios subidos a GitHub.
pause