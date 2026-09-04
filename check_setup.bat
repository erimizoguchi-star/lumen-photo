@echo off
cd /d "%~dp0"
echo === Lumen setup check ===
echo Folder: %CD%
echo.

if exist "start_server.py" (
    echo [OK] start_server.py
) else (
    echo [NG] start_server.py missing
)

if exist "index.html" (
    echo [OK] index.html
) else (
    echo [NG] index.html missing
)

if exist "app.js" (
    echo [OK] app.js
) else (
    echo [NG] app.js missing
)

where python >nul 2>nul
if %ERRORLEVEL%==0 (
    echo [OK] python
    python --version
) else (
    where py >nul 2>nul
    if %ERRORLEVEL%==0 (
        echo [OK] py launcher
        py -3 --version
    ) else (
        echo [NG] Python not found
    )
)

echo.
echo Port 8510:
netstat -ano | findstr ":8510"
if %ERRORLEVEL%==0 (
    echo [INFO] port 8510 is IN USE
) else (
    echo [OK] port 8510 is FREE
)

echo.
pause
