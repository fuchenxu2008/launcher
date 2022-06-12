!macro customInstall
  ; Copy exe files for oncall installation
  File /oname=$PLUGINSDIR\CheatEngine74.exe "${BUILD_RESOURCES_DIR}\CheatEngine74.exe"
  CopyFiles $PLUGINSDIR\CheatEngine74.exe $INSTDIR\resources\CheatEngine74.exe

  IfFileExists "$PROGRAMFILES64\Cheat Engine 7.4\Cheat Engine.exe" file_found file_not_found
  file_found:
  ; StrCpy $0 "the file was found"
  goto end_of_test ;<== important for not continuing on the else branch
  file_not_found:
  ; StrCpy $0 "the file was NOT found"
  File /oname=$PLUGINSDIR\CheatEngine74.exe "${BUILD_RESOURCES_DIR}\CheatEngine74.exe"
  ExecWait '"$PLUGINSDIR\CheatEngine74.exe" /sw'
  end_of_test:
!macroend