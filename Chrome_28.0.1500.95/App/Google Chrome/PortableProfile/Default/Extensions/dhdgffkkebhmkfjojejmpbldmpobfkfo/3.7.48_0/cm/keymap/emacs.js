(function(){function c(a){b.push(a);50<b.length&&b.shift()}function d(){1<b.length&&b.pop();return b[b.length-1]||""}var b=[];CodeMirror.keyMap.emacs={"Ctrl-X":function(a){a.setOption("keyMap","emacs-Ctrl-X")},"Ctrl-W":function(a){c(a.getSelection());a.replaceSelection("")},"Ctrl-Alt-W":function(a){c(a.getSelection());a.replaceSelection("")},"Alt-W":function(a){c(a.getSelection())},"Ctrl-Y":function(a){a.replaceSelection(b[b.length-1]||"")},"Alt-Y":function(a){a.replaceSelection(d())},"Ctrl-/":"undo",
"Shift-Ctrl--":"undo","Shift-Alt-,":"goDocStart","Shift-Alt-.":"goDocEnd","Ctrl-S":"findNext","Ctrl-R":"findPrev","Ctrl-G":"clearSearch","Shift-Alt-5":"replace","Ctrl-Z":"undo","Cmd-Z":"undo","Alt-/":"autocomplete","Alt-V":"goPageUp","Ctrl-J":"newlineAndIndent",Enter:!1,Tab:"indentAuto",fallthrough:["basic","emacsy"]};CodeMirror.keyMap["emacs-Ctrl-X"]={"Ctrl-S":"save","Ctrl-W":"save",S:"saveAll",F:"open",U:"undo",K:"close",auto:"emacs",nofallthrough:!0}})();