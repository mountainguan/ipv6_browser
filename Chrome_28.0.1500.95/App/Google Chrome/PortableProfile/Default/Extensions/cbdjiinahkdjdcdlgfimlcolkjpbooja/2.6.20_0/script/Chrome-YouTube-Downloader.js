﻿function $(t){return document.getElementById(t)}function runScript(){function t(){chrome.extension.sendRequest({method:"completerequest"},function(t){var e="";$("eow-title")?(e=$("eow-title").innerText.replace(/[\\~#%*{}\/<>?|"]/g,"_").replace(/&/g,"and"),console.log("%c CHYD - OK - Parse video title: "+e,"color: rgb(36, 145, 64)")):$("watch-headline-title")?e=$("watch-headline-title").innerText.replace(/[\\~#%*{}\/<>?|"]/g,"_").replace(/&/g,"and"):(e="Unknown title",console.log("%c CHYD - WARNING! - Unknown video title","color: rgb(255, 64, 64)"));var o="";"true"==t.username&&$("watch7-user-header")&&($("watch7-user-header").getElementsByTagName("a")[1].innerText?(o=$("watch7-user-header").getElementsByTagName("a")[1].innerHTML,console.log("%c CHYD - OK - Parse username: "+o,"color: rgb(36, 145, 64)"),o+=" - "):"false"==t.username?o="":(o="Unknown username - ",console.log("%c CHYD - WARNING! Parsing username FAILED!","color: rgb(255, 64, 64)"))),"true"==t.quality&&(l=[" [H.263 240p]"," [H.264 360p]"," [H.264 480p]"," [H.264 720p]"," [H.264 1080p]"," [H.264 1536p]"]);var n=window.location.href.split(/v=/)[1].split("&")[0];console.log("%c CHYD - OK - This video ID: "+n,"color: rgb(36, 145, 64)");var u=window.location.href.split("?")[0]+"?v="+n;console.log("%c CHYD - OK - This video URL: "+u,"color: rgb(36, 145, 64)"),console.log("%c CHYD - OK - Getting to fmt_url_map","color: rgb(36, 145, 64)");var s=new String,c=new String,d=document.getElementsByTagName("script");for(i=0;i<d.length;i++){if(d[i].innerHTML.match(/"url_encoded_fmt_stream_map": "(.*?)"/)){var m=d[i].innerHTML.match(/"url_encoded_fmt_stream_map": "(.*?)"/);m=m[1].replace(/\\u([0-9]+)/g,function(t,e){return decodeURIComponent("%"+parseFloat(e))}),s=m.split(","),console.log("%c CHYD - OK - Parsing from encoded fmt","color: rgb(36, 145, 64)")}if(d[i].innerHTML.match(/"adaptive_fmts": "(.*?)"/)){var p=d[i].innerHTML.match(/"adaptive_fmts": "(.*?)"/);p=p[1].replace(/\\u([0-9]+)/g,function(t,e){return decodeURIComponent("%"+parseFloat(e))}),c=p.split(","),console.log("%c CHYD - OK - Parsing from adaptive fmt","color: rgb(36, 145, 64)")}}var g=[];""!=c&&""!=s?g=s.concat(c):""!=s?g=s:""!=c?g=c:console.log("%c CHYD - ERROR - Getting to fmts FAILED!","color: rgb(255, 64, 64)");var h=0,b=0,f=0,w=0,v=0,y=0,D=0,x=0,H=0,R=0,O=0,k=0,T=0,C=0,P=new String,Y=new String;for(console.log("%c CHYD - OK - Parsing video links start","color: rgb(36, 145, 64)"),i=0;i<g.length;i++){var E=g[i].match(/itag=([0-9]*)/)[1],q=null,M=function(t){return t=t.split(""),t=K(t,32),t=t.reverse(),t=t.slice(3),t=t.reverse(),t=t.slice(1),t=t.reverse(),t=K(t,19),t=K(t,24),t=t.slice(3),t.join("")},K=function(t,e){var a=t[0];return t[0]=t[e%t.length],t[e]=a,t};g[i].match("sig=")?(q=g[i].replace("sig=","signature="),q.match(/signature=(.*?)&/)?(q=q.match(/signature=(.*?)&/)[1],console.log("%c CHYD - REPORT - signature OK! [1]","color: rgb(255, 145, 64)")):q.match(/signature=(.*?)$/)?(q.match(/signature=(.*?)$/)[1],console.log("%c CHYD - REPORT - signature OK! [2]","color: rgb(255, 145, 64)")):console.log("%c CHYD - REPORT - signature not match!","color: rgb(255, 145, 64)")):(g[i].match(/&s=/)||g[i].match(/^s=/))&&(g[i].match(/&s=(.*?)&/)&&null==q?(q=g[i].match(/&s=(.*?)&/)[1],q=M(q),console.log("%c CHYD - REPORT - vevo signature OK! [1]","color: rgb(255, 145, 64)")):g[i].match(/&s=(.*?)$/)&&null==q?(q=g[i].match(/&s=(.*?)$/)[1],q=M(q),console.log("%c CHYD - REPORT - vevo signature OK! [2]","color: rgb(255, 145, 64)")):g[i].match(/^s=(.*?)&/)&&null==q?(q=g[i].match(/^s=(.*?)&/)[1],q=M(q),console.log("%c CHYD - REPORT - vevo signature OK! [3]","color: rgb(255, 145, 64)")):console.log("%c CHYD - REPORT - vevo signature not match!","color: rgb(255, 145, 64)")),g[i]=(g[i].match(/url=(.*?)&/)||g[i].match(/url=(.*?)$/))[1].match("signature")?unescape((g[i].match(/url=(.*?)&/)||g[i].match(/url=(.*?)$/))[1]):unescape((g[i].match(/url=(.*?)&/)||g[i].match(/url=(.*?)$/))[1])+"&signature="+q;var L=[];L=E,"5"==L&&"true"==t.lq&&0==h&&(P+='<a target="iframe" download="'+o+e+l[0]+'.flv" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v240p"><b>FLV</b> (240p)</span></a>',h++),"133"==L&&"true"==t.lq&&0==b&&(P+='<a target="iframe" download="'+o+e+l[1]+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v260p"><b>MP4</b> (240p) - no audio</span></a>',b++),"134"==L&&"true"==t.mq&&0==f&&(P+='<a target="iframe" download="'+o+e+l[1]+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v360p"><b>MP4</b> (360p) - no audio</span></a>',f++),"18"==L&&"true"==t.mq&&0==w&&(P+='<a target="iframe" download="'+o+e+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="wm360p"><b>MP4</b> (360p)</span></a>',w++),"135"==L&&"true"==t.hq&&0==v&&(P+='<a target="iframe" download="'+o+e+l[2]+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v480p"><b>MP4</b> (480p) - no audio</span></a>',v++),"44"==L&&"true"==t.hq&&"true"==t.webm&&0==y&&(P+='<a target="iframe" download="'+o+e+'.webm" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="wm480p"><b>WebM</b> (480p)</span></a>',y++),"136"==L&&"true"==t.hd&&0==D&&(P+='<a target="iframe" download="'+o+e+l[3]+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v720p"><b>MP4</b> HD (720p) - no audio</span></a>',D++),"22"==L&&"true"==t.hd&&0==x&&(P+='<a target="iframe" download="'+o+e+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="wm720p"><b>MP4</b> HD (720p)</span></a>',x++),"137"==L&&"true"==t.fhd&&0==H&&(P+='<a target="iframe" download="'+o+e+l[4]+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v1080p"><b>MP4</b> HD (1080p) - no audio</span></a>',H++),"200"==L&&"true"==t.huhd&&0==R&&(P+='<a target="iframe" download="'+o+e+l[5]+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v2k"><b>MP4</b> HD (2K) - no audio</span></a>',R++),"138"==L&&"true"==t.uhd&&0==O&&(P+='<a target="iframe" download="'+o+e+'.mp4" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="v4k"><b>MP4</b> HD (4K) - no audio</span></a>',O++),"141"==L&&"true"==t.audio&&0==k&&(P+='<a target="iframe" download="'+o+e+'.m4a" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="ahigh"><b>M4A</b> 256kbps (AUDIO)</span></a>',k++),"140"==L&&"true"==t.audio&&0==T&&(P+='<a target="iframe" download="'+o+e+'.m4a" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="amed"><b>M4A</b> 128kbps (AUDIO)</span></a>',T++),"139"==L&&"true"==t.audio&&0==C&&(P+='<a target="iframe" download="'+o+e+'.m4a" href="'+g[i]+'"><span class="yt-uix-button-menu-item" id="alow"><b>M4A</b> 48kbps (AUDIO)</span></a>',C++)}for(console.log("%c CHYD - OK - Parsing video links end","color: rgb(36, 145, 64)"),i=0;i<g.length;i++){var E=parseInt((g[i].match(/itag=([0-9]*)&/)||g[i].match(/itag=([0-9]*)$/))[1]),L=[];L=E,g[i]=decodeURIComponent(g[i]);var _="";if("true"==t.quality&&"138"==L&&"true"==t.uduhd?_=" [H.264 4k]":"true"==t.quality&&"200"==L&&"true"==t.udhuhd?_=" [H.264 2k]":"true"==t.quality&&"137"==L&&"true"==t.udfhd?_=" [H.264 1080p]":"true"==t.quality&&"136"==L&&"true"==t.udhd?_=" [H.264 720p]":"true"==t.quality&&"135"==L&&"true"==t.udhq?_=" [H.264 480p]":"true"==t.quality&&"134"==L&&"true"==t.udmq?_=" [H.264 360p]":"true"==t.quality&&"133"==L&&"true"==t.udlq&&(_=" [H.263 240p]"),"138"==L&&"true"==t.uduhd||"137"==L&&"true"==t.udfhd||"136"==L&&"true"==t.udhd||"135"==L&&"true"==t.udhq||"134"==L&&"true"==t.udmq||"133"==L&&"true"==t.udlq){Y+='<a target="iframe" download="'+o+e+_+'.mp4" href="'+g[i]+'">'+a[1]+"</a>";break}}"true"==t.ytmp3&&(P+='<a href="http://www.flvto.com/?url='+u+'" target="_blank"><span class="yt-uix-button-menu-item" id="ytmp3"><b>MP3</b> (Flvto)</span></a>'),"true"==t.v2mp3&&(P+='<a href="http://www.video2mp3.net/?url='+u+'&hq=1" target="_blank"><span class="yt-uix-button-menu-item" id="v2mp3"><b>MP3</b> (Video2mp3)</span></a>'),"true"==t.nstyle&&$("watch7-user-header")?($("watch7-user-header").innerHTML+='<div id="watch-actions-center-new"><iframe name="iframe"></iframe><span class="yt-uix-button-group"><button id="download" class="start yt-uix-button yt-uix-tooltip yt-uix-button-subscribe-branded yt-uix-button-default" data-tooltip-text="'+a[0]+'" data-tooltip-timer="625" title="" data-tooltip="'+a[0]+'"><span class="yt-uix-button-content">'+Y+'</span></button><button id="menu" class="end yt-uix-tooltip yt-uix-button yt-uix-button-subscribe-branded yt-uix-button-empty yt-uix-button-default" onclick=";return false;" data-tooltip-text="'+a[2]+'" data-tooltip-timer="625" title="" data-tooltip="'+a[2]+'" data-button-listener="16" data-content-id="yt-uix-tooltip2-content"><span class="yt-uix-button-content"><img class="yt-uix-button-arrow"></span><ul id="stylelist" class="yt-uix-button-menu hid">'+r+P+"</ul></button></span></div>",console.log("%c CHYD - OK - Set new style","color: rgb(36, 145, 64)")):"true"==t.cstyle&&$("watch7-user-header")?($("watch7-user-header").innerHTML+='<div id="watch-actions-center-clasic"><iframe name="iframe"></iframe><button id="download" class="yt-uix-button yt-uix-tooltip yt-uix-button-subscribe-branded yt-uix-button-default" onclick=";return false;" data-tooltip-text="'+a[0]+'" data-tooltip-timer="625" title="" data-tooltip="'+a[0]+'" data-button-listener="16" data-content-id="yt-uix-tooltip2-content"><span class="yt-uix-button-content">'+a[1]+'</span><img class="yt-uix-button-arrow" style="margin-right:8px;"><ul id="stylelist" class="yt-uix-button-menu hid">'+r+P+"</ul></button></div>",console.log("%c CHYD - OK - Set clasic style","color: rgb(36, 145, 64)")):console.log("%c CHYD - ERROR! Including button FAILED!","color: rgb(255, 64, 64)"),console.log("%c CHYD - OK - End script","color: rgb(36, 145, 64)"),check()})}if(loop++,console.log("%c CHYD - OK - Runing on loop "+loop,"color: rgb(36, 145, 64)"),document.getElementsByTagName("html").item(0).lang&&document.getElementsByTagName("body").item(0).className){var e=document.getElementsByTagName("html").item(0).lang;document.getElementsByTagName("body").item(0).className;var a=["Download this video!","Download","Download specific format"];"cs"==e&&(a=["Stáhnout video!","Stáhnout","Stáhnout konkrétní formát"]),"de"==e&&(a=["Dieses video herunterladen!","Download","Download bestimmten format"]),"en"==e&&(a=["Download this video!","Download","Download specific format"]),"es"==e&&(a=["Descargar este vídeo!","Descargar","Descargar formato específico"]),"sk"==e&&(a=["Stiahnut toto video!","Stiahnut","Stiahnut konkrétny formát"]),"it"==e&&(a=["Scarica il video!","Download","Scarica formato specifico"]),"pl"==e&&(a=["Pobierz wideo!","Pobierz","Pobierz konkretnym formacie"]),"ru"==e&&(a=["Скачать это видео!","Скачать","Скачать определенный формат"]),"hr"==e&&(a=["Preuzmi ovaj video!","Download","Preuzimanje specificnom formatu"]),"fr"==e&&(a=["Télécharger cette vidéo!","Télécharger","Télécharger format spécifique"]),"ar"==e&&(a=["!تنزيل هذا الفيديو","تنزيل","تنزيل صيغة محددة"]),"hu"==e&&(a=["Letöltés ezt a videót!","Letöltés","Letöltés meghatározott formátumban"])}var o=chrome.extension.getURL("images/options.png"),n=chrome.extension.getURL("html/options.html");chrome.extension.getURL("images/arrow.png");var r='<div id="styleul" class="yt-uix-tooltip" data-tooltip-text="'+chrome.i18n.getMessage("settingspagetitle")+'"><a href="'+n+'" target="_blank"><img src="'+o+'" /></a></div>',l=[];t()}function check(){null==$("watch7-user-header")?console.log("%c CHYD - ERROR - Fuck YT","color: rgb(255, 64, 64)"):5==repeat?console.log("%c CHYD - ERROR - Too many attempts to run the script","color: rgb(255, 64, 64)"):null==$("download")&&5>repeat?(repeat++,runScript()):$("download")&&(repeat=0)}$("page-container").addEventListener("DOMNodeInserted",function(t){"watch7-container"===t.target.id&&(console.log("%c is ok?","color: rgb(36, 145, 64)"),window.location.reload())},!1);var loop=0,repeat=0;check();