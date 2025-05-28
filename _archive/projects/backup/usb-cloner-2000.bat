@echo off
setlocal enabledelayedexpansion

:: get today's date 
for /f %%A in ('powershell -NoProfile -Command "Get-Date -Format \"yyyyMMdd\""') do set "TODAY=%%A"

set "SOURCEDIR=D:\Videos"

:: build file list with FULL paths
set "filelist=%temp%\today_mp4_fullpaths.txt"
del "%filelist%" >nul 2>nul

for /f "delims=" %%F in ('powershell -NoProfile -Command ^
    "$today = \"%TODAY%\"; Get-ChildItem -Path '%SOURCEDIR%' -Recurse -Filter '*.mp4' | Where-Object {$_.LastWriteTime.ToString('yyyyMMdd') -eq $today} | Select-Object -ExpandProperty FullName"') do (
    echo %%F>>"%filelist%"
)

:: check if any files found
if not exist "%filelist%" (
    echo No mp4 files modified today were found!
    pause
    exit /b
)

:: detect all connected USB drives
set "drivelist=%temp%\usb_drives_list.txt"
del "%drivelist%" >nul 2>nul

for /f "skip=1 tokens=1" %%D in ('wmic logicaldisk where "drivetype=2" get deviceid') do (
    if exist "%%D\" (
        echo %%D>>"%drivelist%"
    )
)

if not exist "%drivelist%" (
    echo No flash drives found!
    pause
    exit /b
)

:: Start parallel xcopy jobs with eject after finish
set "copy_jobs=0"
for /f "usebackq delims=" %%D in ("%drivelist%") do (
    set /a copy_jobs+=1
    echo Starting copy to drive %%D...
    start "CopyToUSB!copy_jobs!" /min cmd /c (
        for /f "usebackq delims=" %%F in ("%filelist%") do (
            echo Copying %%~nxF to %%D
            xcopy "%%F" "%%D\" /Y /Q >nul
        )
        echo Done copying to %%D
        timeout /t 2 >nul
        echo Ejecting drive %%D...
        powershell -NoProfile -Command "(New-Object -ComObject Shell.Application).NameSpace(17).ParseName('%%D').InvokeVerb('Eject')"
    )
)

echo All xcopy operations started minimized in parallel!

timeout /t 2 >nul

powershell -c (New-Object Media.SoundPlayer "C:\Windows\Media\notify.wav").PlaySync()

powershell -noprofile -executionpolicy bypass -command "& {Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Cloning has been complete', 'USBCloner', 'OK')} "

exit /b