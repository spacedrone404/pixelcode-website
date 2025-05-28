
c:

cd "C:\Users\sp808\Desktop\4STOCK\"

del *.JPG *.JPEG *.DNG *.ORF *.TIFF *.TIF *.PP3 /Q /F 

cd "C:\Users\sp808\Desktop\4STOCK\DENOISED\"

del *.TIFF *.TIF /Q /F


ping -n 4 localhost > nul

robocopy /mov /e C:\Users\sp808\Desktop\4STOCK\DENOISED\ F:\4STOCK\_ARCHIVE *.jpg *.psd *.mp4
