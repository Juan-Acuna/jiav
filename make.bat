@ECHO off    
if /i %1 == css goto :css
if /i %1 == watch goto :watch

echo Ninguna opcion seleccionada.
goto :eof ::can be ommited to run the `default` function similarly to makefiles

:css
echo Construyendo css...
npx tailwindcss -i ./src/css/app.css -o ./dist/css/app.css
goto :fin

:watch
echo Construyendo css...
npx tailwindcss -i ./src/css/app.css -o ./dist/css/app.css --watch
goto :fin

:fin
echo Construccion terminada.
pause
goto :eof