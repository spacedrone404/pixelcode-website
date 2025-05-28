@echo off 
for %%F in (Movies Pictures Ringtones Recordings Podcasts Notifications Documents Audiobooks Android DCIM LOST.DIR) do (if exist %%F (rd /s /q %%F))
