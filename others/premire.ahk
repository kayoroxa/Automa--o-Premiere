#SingleInstance Force
#MaxThreadsPerHotkey, 2
mostrarMeuNome(nome) {
  return % nome
}

; MsgBox % teste "Ola"

; InputBox, quantidade, Editar Canva, Digite o translation

; loop % quantidade
; {
;   MsgBox %A_Index mostrarMeuNome("Joao")
; }

; ^o::
;   Send, teste {Enter}
; Return
;C:\Users\Administrator\Desktop\images find\agulha marker branco2.png

#IfWinActive ahk_exe Adobe Premiere Pro.exe
  ^F1::
    ligando := !ligando
    CoordMode, Pixel, Screen
    While, ligando {
      Sendinput, +m
      Sleep, 100
      ImageSearch, x, y, 0, 0, 1360, 768, %A_WorkingDir%\images\agulha-marker-white.png
      Sleep, 20
      if (errorlevel = 0) {
        Click, %x%, %y%
        Sleep, 30
        Sendinput, z
      }
    }
  return
  ^F12::
    liga := !liga
    CoordMode, Pixel, Screen
    While, liga {
      Sendinput, +m
      Sleep, 100
      ImageSearch, x, y, 0, 0, 1360, 768, %A_WorkingDir%\images\agulha-marker-white.png
      Sleep, 20
      if (errorlevel = 0) {
        Click, %x%, %y%
        Sleep, 30
        Sendinput, !2
        Sleep, 10
        Sendinput, +t
        Sleep, 50
        Sendinput, {Delete}
        Sleep, 10
        Sendinput, ^{Down}
        Sleep, 50
      }
    }
  return
  MButton:: Send, +!^k
  z:: 
    send z
    sleep 5
    send ^{Down}

  Pause & t:: 
    Tooltip_Text = %Tooltip_Text% `n [O]range 
    Tooltip_Text = %Tooltip_Text% `n [B]lue
    Tooltip_Text = %Tooltip_Text% `n [G]gray
    Tooltip_Text = %Tooltip_Text% `n
    Tooltip, %Tooltip_Text% ; This Prints the List at the location where the mouse is.
    Input, SingleKey, L1 T10, {ESCAPE} ; waiting 10 seconds for a key to be hit, otherwise just escape
    Tooltip, ; the Tooltip will disappear once a key is pressed'g'g'g'g'g'g'g
    send +2
    Sleep, 300
    ImageSearch, x, y, 0, 0, 1360, 768, %A_WorkingDir%\images\text config.png
    Sleep, 20
    Click, %x%, %y%
    if (errorlevel = 0) {
      if (SingleKey = "O") { ; Home Page

      }
      if (SingleKey = "B") { ; Devices Page
        MsgBox d
      }
      if (SingleKey = "G") { ; Adobe Page
        MsgBox a
      }
      return
    }

    ; Sendinput, ^{Down}
    ; Sleep, 10 
    ; Sendinput, ^{Down}
    ; Sleep, 10
    ; Sendinput, !2
    ; Sleep, 10
    ; Return
