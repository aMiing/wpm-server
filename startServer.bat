title 启动管理系统

@echo off
:: 获取管理员权限
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

#TIMEOUT /T 1
#@echo stop mysql server ...
#net stop mysql57

@echo start mysql server ...
net start mysql57

#TIMEOUT /T 1
#@echo off
#start cmd /k "pm2 stop all" 

TIMEOUT /T 3
@echo 正在启动服务
start cmd /k "pm2 start app.js"

@echo 即将通过默认浏览器打开系统...
TIMEOUT /T 3
start http://localhost:3000/#/login

TIMEOUT /T 1
@echo off
start cmd /k "taskkill /f /t /im cmd.exe"
