net stop "Apache2.4"
ping -n 2 localhost > nul
net stop "PostgreSQL 14"
ping -n 2 localhost > nul
net start "Apache2.4"
ping -n 2 localhost > nul
net start "PostgreSQL 14"


