@echo off
echo ���ڱ���...
echo.
md "Profile\User Data"
xcopy "%USERPROFILE%\Local Settings\Application Data\Google\Chrome\User Data" "Profile\User Data" /e /c /y /q
echo.
echo ������� by ��Ȼ����
echo.
pause