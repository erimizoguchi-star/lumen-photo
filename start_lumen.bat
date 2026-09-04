@echo off
cd /d "%~dp0"

if not exist "start_server.py" (
    echo ERROR: start_server.py not found
    echo Run: git fetch origin ^& git reset --hard origin/main
    pause
    exit /b 1
)

echo Starting Lumen on port 8510...
echo Folder: %CD%
echo Open: http://localhost:8510
echo Office: https://lumen.n-kyouei-system.com
echo Press Ctrl+C to stop
echo.

where python >nul 2>nul
if %ERRORLEVEL%==0 (
    cmd /k "python start_server.py"
    exit /b 0
)

where py >nul 2>nul
if %ERRORLEVEL%==0 (
    cmd /k "py -3 start_server.py"
    exit /b 0
)

echo ERROR: Python not found
pause
exit /b 1
