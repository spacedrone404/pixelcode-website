
@echo off

set "USBDrive="
for %%I in (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    2>nul vol %%I: | find "2689-67B7" > nul
    if not errorlevel 1 (
        set "USBDrive=%%I:"
    )
)

set "AnalyzeFolder=E:\\!analyze"
set "ArchiveBaseName=AnalyzeBackup_%date:~0,4%-%date:~5,2%-%date:~8,2%"
set "ArchiveExtension=.zip"
set "ArchiveName=%ArchiveBaseName%%ArchiveExtension%"


"C:\\Program Files\\7-Zip\\7z.exe" a -r "%ArchiveName%" "%AnalyzeFolder%\\*" -xr!q


set "FinalArchiveName=%ArchiveName%"
set /a Index=1

:CheckName
if exist "%USBDrive%\\!!!!\\%FinalArchiveName%" (
    set "FinalArchiveName=%ArchiveBaseName%-%Index%%ArchiveExtension%"
    set /a Index+=1
    goto CheckName
)

move "%ArchiveName%" "%USBDrive%\\!!!!\\%FinalArchiveName%" > nul

