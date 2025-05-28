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


REM xcopy "C:\Users\sp808\Desktop\4STOCK\DENOISED\*.jpg" "%usbDrive%STOCKS\DENOISED" /s /i /y

robocopy "C:\Users\sp808\Desktop\4STOCK\DENOISED" "%usbDrive%STOCKS\DENOISED" *.jpg /MOV


pause