(function(){var h={getDataUriFromUrl:function(a,c){var b=document.createElement("img"),e=!1,d=null;document.body.appendChild(b);var f=function(){d&&window.clearTimeout(d);!e&&c&&c(null)},d=window.setTimeout(function(){d=null;f();e=!0},5E3);b.onload=function(){d&&window.clearTimeout(d);var a=document.createElement("canvas");a.width=b.width;a.height=b.height;a.getContext("2d").drawImage(b,0,0);b.parentNode&&b.parentNode.removeChild(b);b=null;!e&&c&&c(a.toDataURL())};b.onerror=f;b.src=a},initCanvas:function(a){this.canvas=
a;this.context=this.canvas.getContext("2d")},init:function(a,c){var b=null;this.canvas?b=this.canvas:(b=document.createElement("canvas"),D&&document.body.appendChild(b));b.height=c;b.width=a;this.initCanvas(b)},initFromImage:function(a,c,b,e,d,f,h){var g=document.createElement("img");D&&document.body.appendChild(g);var k=this;g.onload=function(){k.init(c,b);f&&k.context.scale(f,f);k.context.drawImage(g,e,d);k.loaded=!0;g.parentNode&&g.parentNode.removeChild(g);g=null;h&&h()};g.src=a},printNr:function(a,
c,b,e){this.context.font="22pt Arial bold";this.context.fillStyle="rgba("+e.join(",")+", 1)";this.context.fillText(b,a,c)},circle:function(a,c,b,e){e="rgba("+e.join(",")+", 1)";this.context.fillStyle=e;this.context.beginPath();this.context.arc(a,c,b,0,2*Math.PI,!0);this.context.fill()},rect:function(a,c,b,e,d,f){null==d&&(d=!0);d?(this.context.fillStyle="rgba("+f.join(",")+", 0.99)",this.context.fillRect(a,c,b,e)):(this.context.fillStyle="rgb("+f.join(",")+", 1)",this.context.beginPath(),this.context.moveTo(a,
c),this.context.lineTo(a+b,c),this.context.lineTo(a+b,c+e),this.context.lineTo(a,c+e),this.context.lineTo(a,c),this.context.stroke())},rrect:function(a,c,b,e,d,f){this.circle(a+d,c+d,d,f);this.circle(b-d,c+d,d,f);this.circle(a+d,e-d,d,f);this.circle(b-d,e-d,d,f);this.rect(a+d,c,b-a-2*d,e-c,!0,f);this.rect(a,c+d,b-a,e-c-2*d,!0,f)},createIconEx:function(a,c){var b=this;h.initFromImage(chrome.extension.getURL("images/icon128.png"),140,140,6,6,1,function(){var e=116-(10<a?14:0)-(100<a?14:0)-(1E3<a?14:
0)-(1E4<a?14:0);h.rrect(e,0,140,25,4,[200,0,0]);h.rrect(e+3,3,137,22,4,[190,0,0]);h.printNr(e+4,22,a,[240,250,240]);c&&c(b.canvas.toDataURL())})},toPNG:function(){return this.canvas.toDataURL()}};Registry.register("icon","48",h)})();
