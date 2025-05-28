@echo off
setlocal enabledelayedexpansion

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


for /f "usebackq delims=" %%D in ("%drivelist%") do (
        powershell -NoProfile -Command "(New-Object -ComObject Shell.Application).NameSpace(17).ParseName('%%D').InvokeVerb('Eject')"
    )
echo Flash drives ejected!
)
