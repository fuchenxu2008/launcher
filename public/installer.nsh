!macro customInstall
  File /oname=$PLUGINSDIR\CheatEngine74.exe "${BUILD_RESOURCES_DIR}\CheatEngine74.exe"
  ExecWait '"$PLUGINSDIR\CheatEngine74.exe" /sw'
!macroend