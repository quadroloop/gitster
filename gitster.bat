:: gitster.bat -- windows operational file v0
@echo off
echo ============================================
echo              gitster v 0.1
echo ============================================
echo         (c) Brye Mercines 2018
echo --------------------------------------------
set /p f=file to watch:^>
setlocal
set file=%f%
for %%I in (%f%) do set initsize=%%~zI



:watch
call :setsize %file%
if %size% == %initsize% (
  echo init-size --^> %initsize% / size --^> size = %size%
  echo git-watch: watching for changes..   
) else (
  :: run git sequence
  goto gitster
)
goto watch


:setsize
set size=%~z1
goto :eof

:gitster
echo detected changes: ghost commit: [%random%-%random%-%date%-%time%]!
git add .
git commit -m "automatically added changes via gitser"
git push
set initsize=%size%
goto watch