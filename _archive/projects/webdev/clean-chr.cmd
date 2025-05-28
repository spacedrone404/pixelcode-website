@echo off
taskkill /IM chrome.exe /F >nul 2>&1 || echo Chrome is not running
timeout /t 2 /nobreak >nul
rmdir /s /q "C:\Users\sp808\AppData\Local\Supermium\User Data\Default\Code Cache"
rmdir /s /q "C:\Users\sp808\AppData\Local\Supermium\User Data\Default\Cache"
start "" "C:\Program Files\Supermium\chrome.exe"