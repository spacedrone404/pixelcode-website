@echo off
taskkill /IM r3dfox.exe /F >nul 2>&1 || echo Firefox is not running
timeout /t 2 /nobreak >nul
rmdir /s /q "C:\Users\sp808\AppData\Local\Eclipse Community\r3dfox\Profiles\na8ow4wf.default-default-1\cache2"
start "" "%ProgramFiles%\Eclipse Community\r3dfox\r3dfox.exe"