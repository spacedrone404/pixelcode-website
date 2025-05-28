@echo off
setlocal enabledelayedexpansion

:: Local destination folder
set "destFolder=C:\Users\sp808\Desktop\4STOCK"


:: Loop through all drives to find removable drives
for %%D in (C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    :: Check if the drive is removable
    wmic logicaldisk where "DeviceID='%%D:' and DriveType=2" get DeviceID 2>nul | find "%%D:" >nul
    if !errorlevel! equ 0 (

	   Robocopy "%%D:\DCIM\100NOKIA" "%destFolder%" *.JPG *.JPEG *.ORF *.DNG *.MP4 /E /MOV /MAXAGE:8 
	   Robocopy "%%D:\DCIM\100OLYMP" "%destFolder%" *.JPG *.JPEG *.ORF *.DNG *.MP4 /E /MOV /MAXAGE:8 
	   Robocopy "%%D:\DCIM\101RICOH" "%destFolder%" *.JPG *.JPEG *.ORF *.DNG *.MP4 /E /MOV /MAXAGE:8 
           
        )

    )

Robocopy C:\Users\sp808\_NEXT\4JUNK "%destFolder%" *.DNG *.ORF *.JPG *.MP4 *.MOV *.JPEG /XO /E /MOV




