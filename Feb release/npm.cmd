:: Created by npm, please don't edit manually.
@IF EXIST "%~dp0\nodejs.exe" (
  "%~dp0\nodejs.exe" "%~dp0\.\node_modules\npm\bin\npm-cli.js" %*
) ELSE (
  node "%~dp0\.\node_modules\npm\bin\npm-cli.js" %*
)
