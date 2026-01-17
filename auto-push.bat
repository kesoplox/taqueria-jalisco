@echo off
cd /d "c:\Users\MINEDUCYT\Desktop\Kevin León web\Ejemplos de mi trabajo\PAGINAS WEB\Taqueria Jalisco"
git add .
git status --porcelain | findstr . >nul
if %errorlevel% == 0 (
    git commit -m "Auto-commit desde VS Code"
    git pull origin main --rebase
    git push origin main
    echo Cambios subidos a GitHub.
) else (
    echo No hay cambios para subir.
)
pause