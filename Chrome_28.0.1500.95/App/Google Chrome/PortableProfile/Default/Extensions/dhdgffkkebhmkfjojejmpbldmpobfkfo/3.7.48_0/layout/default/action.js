var D=!0;
Registry.require(["pingpong","crcrc","layout/default/htmlutil","i18n","layout/default/layout_helper"],function(){var x=Registry.prepare(),m=Registry.get("crcrc").cr,k=Registry.get("crcrc").crc,r=Registry.get("layout/default/htmlutil");Registry.get("pingpong");var l=Registry.get("i18n"),s=Registry.get("layout"),t=Registry.get("layout/default/layout_helper"),u=t.images;s.render(function(){var n={};t.addStyle();t.addFont();var s=function(b,a){var d=[];if(a.sub_menu_item){var c=k("table","actiontable","actiontable-"+
a.name);v(c,a.items);d.push(c)}else if(c=null,a.image?c=r.createImage(u.get(a.image),a.name,a.id,null,""):a.enabler&&(c=r.createImage(chrome.extension.getURL(n.enabled?"/layout/default/images/button_ok.png":"/layout/default/images/cancel.png"),a.name,a.uuid,null,"")),c&&d.push(c),a.url||a.urls){for(var c=m("span",a.name,a.id,"urls"),e=a.urls||[a],f=0;f<e.length;f++){var g=e[f],h=document.createElement("span");h.textContent=g.name;var q=a.urls?h:c;q.url=g.url;q.newtab=g.newtab;q.addEventListener("click",
function(){y(this.url,this.newtab)});$(q).addClass("clickable");c.appendChild(h);f<e.length-1&&(g=document.createElement("span"),g.textContent=" | ",c.appendChild(g))}d.push(c);a.tamperfire&&function(){var c=function(c,b){d&&1<d.length&&(d[1].textContent=b?b:d[1].textContent.replace("?",Number(c)));d[0]&&d[0].setAttribute("src",u.get(a.doneImage))};a.tabid&&z(a.tabid,c)}()}else a.menucmd?(c=document.createElement("span"),b.id=a.id,f=function(){A(this.id,window.close)},b.addEventListener("click",f),
$(b).addClass("clickable"),c.textContent=a.name,a.accessKey&&(e=a.accessKey[0].toUpperCase(),B(e,f,b)?(f=RegExp(e,"i"),g=c.textContent.search(f),h=[],-1==g&&(c.textContent+=" ("+e+")",g=c.textContent.search(f)),h.push(c.textContent.substr(0,g)),h.push('<span class="underlined">'),h.push(c.textContent.substr(g,1)),h.push("</span>"),h.push(c.textContent.substr(g+1)),c.innerHTML=h.join("")):console.warn("Registering keyboard shortcut for '"+a.name+"' failed"))):a.button?(c=k("span",a.display||"",name,
a.id,"bu",!0),c.textContent=a.name,b.key=a.id,b.warning=a.warning,b.reload=a.reload,b.addEventListener("click",function(){var a=!0;this.warning&&(a=C(this.warning));a&&E(this.key,{reload:this.reload})}),$(b).addClass("clickable")):(a.userscript||a.user_agent?(c=m("span",name,a.uuid,"ai"),a.uuid&&(f=a.blacklisted?"enabler_warning":a.enabled?"enabler_enabled":"enabler_disabled",g=a.blacklisted?l.getMessage("This_script_is_blacklisted_"):a.enabled?l.getMessage("Enabled"):l.getMessage("Disabled"),e=function(a){a&&
a.button&2||a.button&1||a.ctrlKey?(window.open(chrome.extension.getURL("options.html")+"#open="+this.key),a.stopPropagation()):F(this.uuid,"enabled",!this.oldvalue)},f=r.createEnabler(f,a.uuid,"enabled","enabled",g,e,0<a.position?10>a.position?" "+a.position:a.position:null),f.oldvalue=a.enabled,d.push(f),c.uuid=a.uuid,c.oldvalue=a.enabled,c.key=a.uuid,c.addEventListener("click",e),e=" clickable",a.blacklisted&&(e+=" crossedout",b.setAttribute("title",l.getMessage("This_script_is_blacklisted_"))),
$(b).addClass(e))):c=m("span",name,a.id,"ai"),c.textContent=a.name),d.push(c);return d},v=function(b,a,d){for(var c in a){var e=a[c];if(b||d[e.pos]){var f=b||d[e.pos],g=f?m("tr",e.name,e.id,"outer"):null,h=s(g,e);if(h&&h.length)for(f.appendChild(g),c=0;f=h[c];c++){var k=c==h.length-1?3-c:0,l=m("td","actiontd",e.name,e.id,c);0<k&&l.setAttribute("colspan",k);f&&l.appendChild(f);g.appendChild(l)}}else console.warn("Warn(cAm): unknown pos "+e.pos)}},w=function(b,a){var d=document.getElementById("action"),
c=d.parentNode;c.removeChild(d);d=m("span");d.setAttribute("id","action");c.appendChild(d);c=k("table","actionlayout","actionlayout");d.appendChild(c);var e=k("tr","actionpostr","hor"),d=k("td","actionpostd","hor_west");e.appendChild(d);c.appendChild(e);2===x.ACTIONMENU.COLUMNS&&n.enabled?(c=k("td","actionpostd","hor_east"),e.appendChild(c)):c=d;var e=k("table","actionregion","top"),f=k("table","actionregion","right"),g=k("table","actionregion","left"),h=k("table","actionregion","bottom");d.appendChild(e);
c.appendChild(f);d.appendChild(g);d.appendChild(h);var l={top:e,left:g,right:f,bottom:h};window.setTimeout(function(){v(null,b,l)},1)},y=function(b,a){try{var d=function(c){chrome.tabs.sendMessage(c.id,{method:"loadUrl",url:b,newtab:a},function(a){})};a?sendMessage({method:"openInTab",url:b},function(a){}):chrome.tabs.getSelected(null,d)}catch(c){console.warn("Error(lU):",c)}},C=function(b){var a=confirm(b.msg),d={};a&&b.ok?d=b.ok:!a&&b.cancel&&(d=b.cancel);if(b.ok||b.cancel)a=!0;d.url&&sendMessage({method:"openInTab",
url:d.url},function(a){});return a},E=function(b,a){try{sendMessage({method:"buttonPress",name:b},function(c){a.reload&&window.location.reload()})}catch(d){console.warn("Error(rSU):",d)}},p={},G=function(b,a,d){document.body.addEventListener("keydown",function(a){D&&console.log("MenuCmdKeyListener: check event",a);if(!(a.altKey||a.ctrlKey||a.shiftKey))for(var b in p)if(p.hasOwnProperty(b)){var d=p[b];d&&a.keyCode==d.key&&(D&&console.log("MenuCmdKeyListener: ... found",a.keyCode,String.fromCharCode(a.keyCode)),
d.cb.apply(d.elem||window,[]))}},!1)},B=function(b,a,d){D&&console.log("MenuCmdKeyListener: register accessKey "+b);b=b.charCodeAt(0);if(p[b])return D&&console.log("MenuCmdKeyListener: ...failed!"),!1;p[b]={key:b,cb:a,elem:d};return!0},A=function(b,a){try{sendMessage({method:"execMenuCmd",id:b},function(c){a&&a()})}catch(d){console.warn("Error(eMC):",d)}},z=function(b,a){try{sendMessage({method:"getFireItems",countonly:!0,tabid:b},function(c){var b=null;if(c.progress){(b=c.progress.action+"... ")&&
""!=b||(b="");var d="";c.progress.state&&c.progress.state.of&&(d=" "+Math.round(100*c.progress.state.n/c.progress.state.of)+"%");b=""!=b||""!=d?b+d:null}a(c.cnt,b)})}catch(d){console.warn("Error(gFI):",d)}},F=function(b,a,d){try{b={method:"modifyScriptOptions",uuid:b},a&&""!=a&&(b[a]=d),sendMessage(b,function(a){a&&(a.i18n&&l.setLocale(a.i18n),a.items&&(n=a.options||n,w(a.items)))}),document.getElementById("action").innerHTML=l.getMessage("Please_wait___")}catch(c){console.warn("Error(mSo): "+c.message)}};
chrome.extension.onMessage.addListener(function(b,a,d){D&&console.log("onMessage: method "+b.method);"updateActions"==b.method?window.location.reload():D&&console.log("onMessage: Unknown method '"+b.method+"'")});sendMessage({method:"modifyScriptOptions"},function(b){G();b&&(b.i18n&&l.setLocale(b.i18n),b.items&&(n=b.options||n,w(b.items)))})})});
