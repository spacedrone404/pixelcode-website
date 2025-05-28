@echo off
echo Cleaning up temporary files in %TEMP% folder...
echo.

set "tempfolder=%TEMP%"

cd /d "%tempfolder%"

:: Delete all files and folders in TEMP (including read-only and hidden)
del /q /f /s *.* >nul 2>&1
for /d %%x in (*) do rd /s /q "%%x" >nul 2>&1

echo.
echo Temporary files deleted successfully.
echo Initiating system shutdown...

shutdown /s /t 0