taskkill /F /IM "xnviewmp.exe"
taskkill /F /IM "CaptureOne.exe"
taskkill /F /IM "ImgCoreProcess.exe"
taskkill /F /IM "CODiagnosticsService.exe"
taskkill /F /IM "Xpiks.exe"
taskkill /F /IM "photo.exe"
taskkill /F /IM "Topaz DeNoise AI.exe"
taskkill /F /IM "PhotomatixPro.exe"
taskkill /F /IM "vegas210.exe"
taskkill /F /IM "ErrorReportLauncher.exe"
taskkill /F /IM "rawtherapee.exe"
taskkill /F /IM "filezilla.exe"

wmic process where name="xnviewmp.exe" call terminate
wmic process where name="CaptureOne.exe" call terminate
wmic process where name="ImgCoreProcess.exe" call terminate
wmic process where name="CODiagnosticsService.exe" call terminate
wmic process where name="Xpiks.exe" call terminate
wmic process where name="photo.exe" call terminate
wmic process where name="Topaz DeNoise AI.exe" call terminate
wmic process where name="PhotomatixPro.exe" call terminate
wmic process where name="vegas210.exe" call terminate
wmic process where name="ErrorReportLauncher.exe" call terminate
wmic process where name="filezilla.exe" call terminate
wmic process where name="rawtherapee.exe" call terminate

