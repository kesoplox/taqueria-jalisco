@echo off
cd /d "c:\Users\MINEDUCYT\Desktop\Taqueria Jalisco"
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Auto-commit desde VS Code"
git push origin main
echo Cambios subidos a GitHub.
=======
@echo off
cd /d "c:\Users\MINEDUCYT\Desktop\Taqueria Jalisco"
git add .
<<<<<<< HEAD
git commit -m "Auto-commit desde VS Code"
git push origin main
echo Cambios subidos a GitHub.
>>>>>>> 02721cc7465a66e9ff76ba660c164fd5fba7d53d
=======
git status --porcelain >nul
if %errorlevel% neq 0 (
    git commit -m "Auto-commit desde VS Code"
    git push origin main
    echo Cambios subidos a GitHub.
) else (
    echo No hay cambios para subir.
)
>>>>>>> be203c3 (Mejorar auto-push.bat y agregar auto-watch.ps1)
pause