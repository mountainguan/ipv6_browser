(function(){Registry.require("helper");var q=Registry.get("helper"),m={},t=function(b){var d=q.isLocalImage(b);return b&&4<b.length&&"http"==b.substr(0,4)||d},u={"user-agent":!0,referer:!0,origin:!0,host:!0,"proxy-connection":!0,"accept-encoding":!0,"accept-charset":!0},p=function(b,d,g){void 0===d&&(d={});void 0===g&&(g={});if(void 0!=window.chrome&&void 0!=window.chrome.xmlHttpRequest)window.chrome.xmlHttpRequest(b,d,g);else{var n=function(a,b){if(d[a])d[a]("function"==typeof b?b():b)},e=function(a,
b){d[a]&&(n(a,b),d[a]=null)},k=!(d.onload||d.onreadychange||d.onprogress||d.onerr||d.ondone||d.ontimeout),c=new XMLHttpRequest,h=function(){var a="",d=b.url;if(2<c.readyState&&(a=c.getAllResponseHeaders(),4==c.readyState)){a&&(a=a.replace(/TM-finalURL\: .*[\r\n]{1,2}/,""));var r=c.getResponseHeader("TM-finalURL");r&&(d=r)}a={readyState:c.readyState,responseHeaders:a,finalUrl:d,status:4==c.readyState?c.status:0,statusText:4==c.readyState?c.statusText:""};4==c.readyState?(c.responseType&&""!=c.responseType?
(a.responseXML=null,a.responseText=null):(a.responseXML=c.responseXML?escape(c.responseXML):null,a.responseText=c.responseText),a.response=c.response):(a.responseXML=null,a.responseText="",a.response=null);return a},l=function(){var a=h();4==a.readyState&&200!=a.status&&0!=a.status&&0<b.retries?(b.retries--,p(b,d,g)):(e("onload",a),4==a.readyState&&e("ondone"))},v=function(){var a=h();4==a.readyState&&200!=a.status&&0!=a.status&&0<b.retries?(b.retries--,p(b,d,g)):(e("onerr",a),e("onload",a),e("ondone"),
delete c)},s=function(a,b,d){void 0===d&&(d={});try{var e=null,f=null;if(a.lengthComputable||0<a.totalSize)e=a.position||a.loaded,f=a.totalSize||a.total;else{var g=Number(q.getStringBetweenTags(b.responseHeaders.toLowerCase(),"content-length:","\n").trim()),h=c.responseText?c.responseText.length:0;0==g&&(g=-1);e=a.position||a.loaded||h;f=a.totalSize||a.total||g}d.lengthComputable=a.lengthComputable;d.loaded=e;d.done=e;d.total=f;d.totalSize=f}catch(k){}return d},w=function(a){n("onreadychange",function(){var b=
h();b.progress=s(a,b);return b})},x=function(a){n("onprogress",function(){var b=h();return s(a,b,b)})},y=function(a){a=h();e("ontimeout");e("ondone",a)};k||(c.onload=l,c.onerror=v,c.ontimeout=y,c.onprogress=x,c.onreadystatechange=w);try{if(!g.internal&&!t(b.url))throw Error("Invalid scheme of url: "+b.url);c.open(b.method,b.url,!k,b.user,b.password);if(b.headers)for(var f in b.headers)l=f,m.use&&u[f.toLowerCase()]&&(l=m.prefix+f),c.setRequestHeader(l,b.headers[f]);"undefined"!==typeof b.overrideMimeType&&
c.overrideMimeType(b.overrideMimeType);"undefined"!==typeof b.responseType&&(c.responseType=b.responseType);"undefined"!==typeof b.timeout&&(c.timeout=b.timeout);"undefined"!==typeof b.data?c.send(b.data):c.send()}catch(z){if(console.error(z.stack),f={responseXML:"",responseText:"",response:null,readyState:4,responseHeaders:"",status:403,statusText:"Forbidden"},e("onerr",f),e("onload",f),e("ondone"),k)return f}if(k)return h()}};Registry.register("xmlhttprequest","48",{run:p,setWebRequest:function(b){m=
b}})})();
