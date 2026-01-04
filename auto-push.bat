@echo off
cd /d "c:\Users\MINEDUCYT\Desktop\Taqueria Jalisco"
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
) else (
    echo No hay cambios para subir.
)
>>>>>>> be203c3 (Mejorar auto-push.bat y agregar auto-watch.ps1)
>>>>>>> 08d487b6552f3150d1d8247a66b2b62f43406a24
pause