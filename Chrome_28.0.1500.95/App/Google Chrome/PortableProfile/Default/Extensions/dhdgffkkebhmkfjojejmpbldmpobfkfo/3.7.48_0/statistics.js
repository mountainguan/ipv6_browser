(function(c){var h=Registry.prepare(),f={"default":"UA-40782729-1",gcalenpjmijncebpfijmoaglllgpjagf:"UA-40782729-1",dhdgffkkebhmkfjojejmpbldmpobfkfo:"UA-40861355-1",dcgolfjdmhddbdbpipnjnakbblbojcnf:"UA-40861355-1",mfdhdgbonjidekjkjmjaneanmdmpmidf:"UA-40782729-1"};c._gaq=c._gaq||[];var g=!1,k=[{msg:"Attempting to use a disconnected port object"},{msg:"Function.prototype.apply: Arguments list has wrong type",url:"event_bindings"}];Registry.register("statistics","48",{init:function(){var a=
h.SELF.ID;if(!g){c._gaq.push(["_setAccount",f[a]||f["default"]]);c._gaq.push(["_gat._anonymizeIp"]);c._gaq.push(["_trackPageview"]);a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://ssl.google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);g=!0}},tB:function(a){var b="";a.updated&&(b="Updated");c._gaq.push(["_trackEvent","Browser",b,navigator.userAgent])},tS:function(a,b,e){var d="";"i"===e?(d="Installed",a+=
" <"+(b?b:"?")+">"):"u"===e?d="Updated":"b"===e?(d="Blacklisted",a=b):"m"===e?(d="Revealed",a=b):d="Removed";c._gaq.push(["_trackEvent","Script",d,a])},tE:function(a,b,e){void 0===b&&(b="");void 0===e&&(b+=" "+window.location.href,e="");var d=!1;k.forEach(function(c){if(c.msg||c.url)c.msg&&-1==a.search(c.msg)||c.url&&-1==b.search(c.url)||(d=!0)});d||c._gaq.push(["_trackEvent","Error",a,b+e])}})})(window);
