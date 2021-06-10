
@echo off
:: 获取管理员权限
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

TIMEOUT /T 1
@echo begin stop mysql server ...
net stop mysql57
 
TIMEOUT /T 2
@echo begin start mysql server ...
 
TIMEOUT /T 2
net start mysql57
 
TIMEOUT /T 3
@echo off
start cmd /k "pm2 stop all"
start cmd /k "pm2 start app.js"