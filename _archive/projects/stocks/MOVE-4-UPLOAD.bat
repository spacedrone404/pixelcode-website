@echo off
setlocal enabledelayedexpansion

set "targetSerial=2689-67B7"


for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    vol %%D: 2>nul | find "%targetSerial%" >nul
    if !errorlevel! equ 0 (
        set "usbDrive=%%D:\"
        goto gotcha
    )
)


echo Flash drive with serial number %targetSerial% not found.
pause
exit /b

:gotcha

c:
cd c:\Users\sp808\Desktop\4STOCK\DENOISED
del /s /q *.*
Robocopy "%usbDrive%STOCKS\DENOISED" "C:\Users\sp808\Desktop\4STOCK\DENOISED" *.DNG *.JPG *.JPEG /XO /E /MOV /IS

pause