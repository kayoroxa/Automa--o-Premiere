#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

Pause & g:: 
  Tooltip_Text = %Tooltip_Text% `n [H]ome 
  Tooltip_Text = %Tooltip_Text% `n [D]evices Page
  Tooltip_Text = %Tooltip_Text% `n [A]dobe Help page
  Tooltip_Text = %Tooltip_Text% `n
  Tooltip, %Tooltip_Text% ; This Prints the List at the location where the mouse is.
  Input, SingleKey, L1 T10, {ESCAPE} ; waiting 10 seconds for a key to be hit, otherwise just escape
  Tooltip, ; the Tooltip will disappear once a key is pressed'g'g'g'g'g'g'g
  if (SingleKey = "H") { ; Home Page
    MsgBox h
    ; GotoPage("https://mywebsite.com") ; this is where the code goes for each macro
  }
  if (SingleKey = "D") { ; Devices Page
    MsgBox d
    ; GotoPage("https://mydevices.mywork.com")
  }
  if (SingleKey = "A") { ; Adobe Page
    MsgBox a
    ; GotoPage("https://adobe.com")
  }
return