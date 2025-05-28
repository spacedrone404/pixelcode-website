@echo off

set "USBDrive="
for %%I in (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z) do (
    2>nul vol %%I: | find "2689-67B7" > nul
    if not errorlevel 1 (
        set "USBDrive=%%I:"
    )
)
copy "%USBDrive%\!a.txt" "E:\!analyze\"







        
        
