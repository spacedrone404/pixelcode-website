@echo off
setlocal enableextensions enableddelayeexpansion

set "source=C:\Site"
set "dest=E:\Backups\!!!!"

::  splitting %DATE% into MM/DD/YYYY parts, this part was a bitch to implement
for /F "tokens=1-3 delims=/." %%A in ("%DATE%") do (
   set month=%%B
   set day=%%A
   set year=%%C
)

:: converting date stamp to YYYY-MM-DD
set "formatted_date=%year%-%month%-%day%"

:: final name
set "archive_name=projects-%formatted_date%.7z"

:: backing things up
"%ProgramFiles%\7-Zip\7z.exe" a -t7z "%dest%\%archive_name%" "%source%\*"
if errorlevel 1 goto :err_create_archive

:: integrigty check
"%ProgramFiles%\7-Zip\7z.exe" t "%dest%\%archive_name%"
if errorlevel 1 goto :err_test_archive

goto :end_script

:err_create_archive
echo Error while creating archive!
goto :end_script

:err_test_archive
echo Integrity check failed! Archive is corrupted.
goto :end_script

:end_script
endlocal
exit /b