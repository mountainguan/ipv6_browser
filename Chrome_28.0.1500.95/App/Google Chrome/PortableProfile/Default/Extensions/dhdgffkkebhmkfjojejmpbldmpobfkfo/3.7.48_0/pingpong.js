Registry.require("prepare",function(){var b=Registry.prepare(),a=null,d,f=function(e,c){var b=function(b){b?(null!=a&&window.clearTimeout(a),a=null,e(b)):console.log("pp: Warn: got pseudo response!")},g={method:"ping"};try{chrome.extension.sendMessage(g,b)}catch(h){}a=window.setTimeout(function(){null!=a&&window.clearTimeout(a);a=null;0<d--?f(e,c):c&&c()},1E3)};Registry.register("pingpong","48",function(){d=b.PINGPONG.RETRIES;return{ping:f}})});
