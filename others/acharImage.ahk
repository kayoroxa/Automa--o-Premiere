#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

CoordMode, Pixel, Screen

Loop, {
  ImageSearch, x, y, 0, 0, 1360, 768, C:\Users\Administrator\Desktop\images find\agulha marker branco.png
  if (errorlevel = 0)
    MsgBox, achou
  Break
}