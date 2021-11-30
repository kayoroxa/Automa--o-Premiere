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
; Returnaaaaaaaaaaaa
;C:\Users\Administrator\Desktop\images find\agulha marker branco2.png
*#c::Run Calc.exe
*#t::Run "C:\Users\Administrator\AppData\Roaming\Telegram Desktop\Telegram.exe"
*#w::Run "https://web.whatsapp.com/"

RControl::Send, !{Tab}
#IfWinActive ahk_exe POWERPNT.EXE
  ^b::
    Send, !07
    Send, Aretha Extra Bold
    Sendinput, {NumpadEnter} 
  return
  ^m::
    Send, !07
    Send, Aretha Medium
    Sendinput, {NumpadEnter} 
  return
  ^i::
    Send, !07
    Send, Aretha Italic
    Sendinput, {NumpadEnter} 
  return

  ;format painter

  ; !RButton Up::
  ;   KeyWait, Alt
  ;   MouseClick, right 
  ;   send, ^+c
  ; return

  ; !LButton Up::
  ;   KeyWait, Alt
  ;   MouseClick, left
  ;   send, ^+v
  ; return

  Insert & f::
    send, ^h
    send, $frase
    send, {Tab}
  return

  Insert & w::
    send, ^h
    send, $word
    send, {Tab}
  return

  NumpadDiv::
    send, {Esc}
    send, {Esc}
    send, ^{Tab}
  return

  Insert & Home::
    msgbox, , , Copiado!, 0.2
    send, ^+c
    Sleep, 20
    send, {Esc}
    send, {Esc}
    send, ^{Tab}
  return

  Insert::send, ^+v

  ; ~Insert::
  ;   if !(A_TickCount < Insert) {
  ;     KeyWait, Insert
  ;     Insert:= A_TickCount + 150
  ;     return
  ;   }
  ;   Send, ^+c
  ; return

  F11::+f5

  ^+v::
    Send, ^v
  return

  !d::
    Send, !06
    Send, {Tab}
    Send, {Tab}
    Send, {Enter}
    Send, ^{End}
  return

  ^v::
    Send, ^v
    Sleep, 200
    Send, {Ctrl}
    Send, t
  return
  ; +1::
  ;   Sendinput, !3
  ;   Sendinput, {Right}
  ;   Sendinput, {NumpadEnter} 
  ; return
  ; +2::
  ;   Sendinput, !3
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {NumpadEnter} 
  ; return
  ; +3::
  ;   Sendinput, !3
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {NumpadEnter} 
  ; return
  ; +4::
  ;   Sendinput, !3
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {NumpadEnter} 
  ; return
  ; +5::
  ;   Sendinput, !3
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {NumpadEnter} 
  ; return
  ; +6::
  ;   Sendinput, !3
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {Right}
  ;   Sendinput, {NumpadEnter} 
  ; return

  #IfWinActive ahk_exe Adobe Premiere Pro.exe
  ^F1::
    ligando := !ligando
    CoordMode, Pixel, Screen
    While, ligando {
      Sendinput, +m
      Sleep, 20
      ImageSearch, x, y, 0, 0, 1360, 768, %A_WorkingDir%\images\agulha-marker-white.png
      Sleep, 100
      if (0 = 0) {
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
      Sleep, 20
      ImageSearch, x, y, 0, 0, 1360, 768, %A_WorkingDir%\images\agulha-marker-white.png
      Sleep, 100
      if (errorlevel = 0) {
        x := x + 10
        y := y + 10
        Click, %x%, %y%
        Sleep, 20
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
  MButton:: 
    Send, +!^k
    MouseClick, left
  return
  ; z:: 
  ;   send z
  ;   sleep 5
  ;   send ^{Down}
  ^h:: 
    Sendinput, a
    Sleep, 10
    Sendinput, {shift down}
    Sleep, 10
    MouseClick, left
    Sendinput, {shift up}
    Sendinput, v
  return

  ; Pause & t:: 
  ;   Tooltip_Text = %Tooltip_Text% `n [O]range 
  ;   Tooltip_Text = %Tooltip_Text% `n [B]lue
  ;   Tooltip_Text = %Tooltip_Text% `n [G]gray
  ;   Tooltip_Text = %Tooltip_Text% `n
  ;   Tooltip, %Tooltip_Text% ; This Prints the List at the location where the mouse is.
  ;   Input, SingleKey, L1 T10, {ESCAPE} ; waiting 10 seconds for a key to be hit, otherwise just escape
  ;   Tooltip, ; the Tooltip will disappear once a key is pressed'g'g'g'g'g'g'g
  ;   send +2
  ;   Sleep, 300
  ;   ImageSearch, x, y, 0, 0, 1360, 768, %A_WorkingDir%\images\text config.png
  ;   Sleep, 20
  ;   Click, %x%, %y%
  ;   if (errorlevel = 0) {
  ;     if (SingleKey = "O") { ; Home Page

  ;     }
  ;     if (SingleKey = "B") { ; Devices Page
  ;       MsgBox d
  ;     }
  ;     if (SingleKey = "G") { ; Adobe Page
  ;       MsgBox a
  ;     }
  ;     return
  ;   }