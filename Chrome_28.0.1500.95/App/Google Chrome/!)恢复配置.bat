@echo off
echo ���ڻָ�...
echo.
md "%USERPROFILE%\Local Settings\Application Data\Google\Chrome\User Data"
xcopy "Profile\User Data" "%USERPROFILE%\Local Settings\Application Data\Google\Chrome\User Data" /e /c /y /q
echo.
echo �ָ���� by ��Ȼ����
echo.
pause