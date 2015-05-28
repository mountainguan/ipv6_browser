function $(e) {
    return document.getElementById(e)
}
var localStorage = chrome.extension.getBackgroundPage().localStorage;
function save_options() {
    if ($("nstyle").checked) localStorage["nstyle"] = "true";
    else localStorage["nstyle"] = "false";
    if ($("cstyle").checked) localStorage["cstyle"] = "true";
    else localStorage["cstyle"] = "false";
	if ($("v4k").checked) localStorage["4k"] = "true";
    else localStorage["4k"] = "false";
    /*if ($("v2k").checked) localStorage["2k"] = "true";
    else localStorage["2k"] = "false";*/
    if ($("v1080p").checked) localStorage["1080p"] = "true";
    else localStorage["1080p"] = "false";
    if ($("v720p").checked) localStorage["720p"] = "true";
    else localStorage["720p"] = "false";
    if ($("v480p").checked) localStorage["480p"] = "true";
    else localStorage["480p"] = "false";
    if ($("v360p").checked) localStorage["360p"] = "true";
    else localStorage["360p"] = "false";
    if ($("v240p").checked) localStorage["240p"] = "true";
    else localStorage["240p"] = "false";
	if ($("ytaudio").checked) localStorage["ytaudio"] = "true";
    else localStorage["ytaudio"] = "false";
    if ($("ytmp3").checked) localStorage["ytmp3"] = "true";
    else localStorage["ytmp3"] = "false";
    if ($("v2mp3").checked) localStorage["v2mp3"] = "true";
    else localStorage["v2mp3"] = "false";
    if ($("username").checked) localStorage["username"] = "true";
    else localStorage["username"] = "false";
    if ($("quality").checked) localStorage["quality"] = "true";
    else localStorage["quality"] = "false";
	
    if ($("flv").checked) {
        localStorage["flv"] = "true"
    } else {
        localStorage["flv"] = "false"
    }
    if ($("ud4k").selected && $("flv").checked) {
		localStorage["ud4k"] = "true";
        //localStorage["ud2k"] = "true";
        localStorage["ud1080p"] = "true";
        localStorage["ud720p"] = "true";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "false"
    } else if ($("ud4k").selected) {
		localStorage["ud4k"] = "true";
        //localStorage["ud2k"] = "true";
        localStorage["ud1080p"] = "true";
        localStorage["ud720p"] = "true";
        localStorage["ud480p"] = "true";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "true"
    }
    if ($("ud1080p").selected && $("flv").checked) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "true";
        localStorage["ud720p"] = "true";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "false"
    } else if ($("ud1080p").selected) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "true";
        localStorage["ud720p"] = "true";
        localStorage["ud480p"] = "true";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "true"
    }
    if ($("ud720p").selected && $("flv").checked) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "true";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "false"
    } else if ($("ud720p").selected) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "true";
        localStorage["ud480p"] = "true";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "true"
    }
    if ($("ud480p").selected && $("flv").checked) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "false";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "false"
    } else if ($("ud480p").selected) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "false";
        localStorage["ud480p"] = "true";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "true"
    }
    if ($("ud360p").selected && $("flv").checked) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "false";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "false"
    } else if ($("ud360p").selected) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "false";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "true";
        localStorage["ud240p"] = "true"
    }
    if ($("ud240p").selected) {
		localStorage["ud4k"] = "false";
        //localStorage["ud2k"] = "false";
        localStorage["ud1080p"] = "false";
        localStorage["ud720p"] = "false";
        localStorage["ud480p"] = "false";
        localStorage["ud360p"] = "false";
        localStorage["ud240p"] = "true"
    }
    
	$("status").innerHTML = chrome.i18n.getMessage("saved");
    setTimeout(function () {
        $("status").innerHTML = ""
    }, 1800)
}
function test() {
    $("version").textContent = "ver. " + localStorage["version"];
    if (localStorage["installed"] == "true") {
		localStorage["installed"] = "false";
		$("update").style.display = "none";
	}
    else if (localStorage["installed"] == "false") {
		$("greenmsg").style.display = "none";
	}
	if (localStorage["update"] == "true") localStorage["update"] = "false";
	else if (localStorage["update"] == "false") $("update").style.display = "none";
    if (localStorage["nstyle"] == "true") {
        $("down1").style.display = "inline";
        $("down2").style.display = "none";
        $("udr").disabled = false
    }
    if (localStorage["cstyle"] == "true") {
        $("down1").style.display = "none";
        $("down2").style.display = "inline";
        $("udr").disabled = true
    }
	if (localStorage["4k"] == "true") {
        $("noa4k").style.display = "block";
    } else {
        $("noa4k").style.display = "none";
    }
    /*if (localStorage["2k"] == "true") {
        $("noa2k").style.display = "block"
    } else {
        $("noa2k").style.display = "none"
    }*/
    if (localStorage["1080p"] == "true") {
        $("noa1080").style.display = "block";
    } else {
        $("noa1080").style.display = "none";
    }
    if (localStorage["720p"] == "true") {
        $("noa720").style.display = "block";
		$("b720").style.display = "block";
    } else {
        $("noa720").style.display = "none";
		$("b720").style.display = "none";
    }
    if (localStorage["480p"] == "true") {
        $("noa480").style.display = "block";
    } else {
        $("noa480").style.display = "none";
    }
    if (localStorage["360p"] == "true") {
        $("noa360").style.display = "block";
		$("b360").style.display = "block";
    } else {
        $("noa360").style.display = "none";
		$("b360").style.display = "none";
    }
    if (localStorage["240p"] == "true") {
        $("noa240").style.display = "block";
		$("b240").style.display = "block";
    } else {
        $("noa240").style.display = "none";
		$("b240").style.display = "none";
    }
    if (localStorage["ytaudio"] == "true") {
        $("audio1").style.display = "block";
		$("audio2").style.display = "block";
    } else {
        $("audio1").style.display = "none";
		$("audio2").style.display = "none";
    }
    if (localStorage["ytmp3"] == "true") {
        $("bmp31").style.display = "block";
    } else {
        $("bmp31").style.display = "none";
    }
    if (localStorage["v2mp3"] == "true") {
        $("bmp32").style.display = "block";
    } else {
        $("bmp32").style.display = "none";
    }
    if (localStorage["flv"] == "true") {
        $("ud240p").style.display = "none";
        $("v240p").disabled = true;
        $("b240").style.display = "none"
    } else {
        $("ud240p").style.display = "block";
        $("v240p").disabled = false
    }
}
function load_options() {
    
    if (localStorage["nstyle"] == "true") $("nstyle").checked = true;
    if (localStorage["cstyle"] == "true") $("cstyle").checked = true;
    if (localStorage["flv"] == "true") {
        $("flv").checked = true;
        $("ud240p").style.display = "none";
        $("v240p").disabled = true;
        $("b240").style.display = "none"
    }
	if (localStorage["4k"] == "true") $("v4k").checked = true;
    //if (localStorage["2k"] == "true") $("v2k").checked = true;
    if (localStorage["1080p"] == "true") $("v1080p").checked = true;
    if (localStorage["720p"] == "true") $("v720p").checked = true;
    if (localStorage["480p"] == "true") $("v480p").checked = true;
    if (localStorage["360p"] == "true") $("v360p").checked = true;
    if (localStorage["240p"] == "true") $("v240p").checked = true;
	if (localStorage["ytaudio"] == "true") $("ytaudio").checked = true;
    if (localStorage["ytmp3"] == "true") $("ytmp3").checked = true;
    if (localStorage["v2mp3"] == "true") $("v2mp3").checked = true;
    if (localStorage["username"] == "true") $("username").checked = true;
    if (localStorage["quality"] == "true") $("quality").checked = true;
    if (localStorage["webm"] == "true") $("webm").checked = true;
    if (localStorage["ud4k"] == "true") {
        $("ud4k").selected = true;
		//$("ud2k").selected = false;
        $("ud1080p").selected = false;
        $("ud720p").selected = false;
        $("ud480p").selected = false;
        $("ud360p").selected = false;
        $("ud240p").selected = false
    /*} else if (localStorage["ud2k"] == "true") {
		$("ud4k").selected = false;
        $("ud2k").selected = true;
        $("ud1080p").selected = false;
        $("ud720p").selected = false;
        $("ud480p").selected = false;
        $("ud360p").selected = false;
        $("ud240p").selected = false*/
    } else if (localStorage["ud1080p"] == "true") {
        $("ud4k").selected = false;
		//$("ud2k").selected = false;
        $("ud1080p").selected = true;
        $("ud720p").selected = false;
        $("ud480p").selected = false;
        $("ud360p").selected = false;
        $("ud240p").selected = false
    } else if (localStorage["ud720p"] == "true") {
        $("ud4k").selected = false;
		//$("ud2k").selected = false;
        $("ud1080p").selected = false;
        $("ud720p").selected = true;
        $("ud480p").selected = false;
        $("ud360p").selected = false;
        $("ud240p").selected = false
    } else if (localStorage["ud480p"] == "true") {
        $("ud4k").selected = false;
		//$("ud2k").selected = false;
        $("ud1080p").selected = false;
        $("ud720p").selected = false;
        $("ud480p").selected = true;
        $("ud360p").selected = false;
        $("ud240p").selected = false
    } else if (localStorage["ud360p"] == "true") {
        $("ud4k").selected = false;
		//$("ud2k").selected = false;
        $("ud1080p").selected = false;
        $("ud720p").selected = false;
        $("ud480p").selected = false;
        $("ud360p").selected = true;
        $("ud240p").selected = false
    } else if (localStorage["ud240p"] == "true") {
        $("ud4k").selected = false;
		//$("ud2k").selected = false;
        $("ud1080p").selected = false;
        $("ud720p").selected = false;
        $("ud480p").selected = false;
        $("ud360p").selected = false;
        $("ud240p").selected = true
    }
	function loadText(elementId, text) {
        document.getElementById(elementId).textContent = text;
    }
    document.title = chrome.i18n.getMessage("settingspagetitle");
    loadText("description", chrome.i18n.getMessage("description"));
    loadText("buttonstyle", chrome.i18n.getMessage("buttonstyle"));
    loadText("oneclickdownload", chrome.i18n.getMessage("oneclickdownload"));
    loadText("oneclicktext", chrome.i18n.getMessage("oneclicktext"));
    loadText("clasicdownload", chrome.i18n.getMessage("clasicdownload"));
    loadText("videoformats", chrome.i18n.getMessage("videoformats"));
    loadText("disableflv", chrome.i18n.getMessage("disableflv"));
    //loadText("availablewebm", chrome.i18n.getMessage("availablewebm"));
    loadText("available4k", chrome.i18n.getMessage("available2k"));
    loadText("available1080", chrome.i18n.getMessage("available1080"));
    loadText("available720", chrome.i18n.getMessage("available720"));
    loadText("available480", chrome.i18n.getMessage("available480"));
    loadText("available360", chrome.i18n.getMessage("available360"));
    loadText("available240", chrome.i18n.getMessage("available240"));
    loadText("availableytmp3", chrome.i18n.getMessage("availablemp3"));
    loadText("availablev2mp3", chrome.i18n.getMessage("availablemp3"));
    loadText("videotitle", chrome.i18n.getMessage("videotitle"));
    loadText("includenick", chrome.i18n.getMessage("includenick"));
    loadText("includequality", chrome.i18n.getMessage("includequality"));
    loadText("nickname", chrome.i18n.getMessage("nickname"));
	loadText("translated", chrome.i18n.getMessage("translated"));
	loadText("greenmsg", chrome.i18n.getMessage("installmessage"));
	loadText("update", chrome.i18n.getMessage("updatemessage"));
	
	
	
	if(chrome.i18n.getMessage("language") == "none"){
	$("description").dir="rtl";
	$("buttonstyle").dir="rtl";
	$("oneclickdownload").dir="rtl";
	$("clasicdownload").dir="rtl";
	$("clasicdownload").dir="rtl";
	$("videoformats").dir="rtl";
	$("disableflv").dir="rtl";
	$("availablewebm").dir="rtl";
	$("available2k").dir="rtl";
	$("available1080").dir="rtl";
	$("available720").dir="rtl";
	$("available480").dir="rtl";
	$("available360").dir="rtl";
	$("available240").dir="rtl";
	$("availableytmp3").dir="rtl";
	$("availablev2mp3").dir="rtl";
	$("videotitle").dir="rtl";
	$("includenick").dir="rtl";
	$("includequality").dir="rtl";
	$("nickname").dir="rtl";
	$("translated").dir="rtl";
	$("greenmsg").dir="rtl";
	$("update").dir="rtl";
	$("status").dir="rtl";
	$("dir").dir="rtl";
	}
	
}
document.addEventListener("DOMContentLoaded", function () {
    load_options();
    test();
	
    var e = document.querySelectorAll("input");
    for (var t = 0; t < e.length; t++) {
        e[t].addEventListener("change", function () {
            save_options();
            test()
        })
    }
    $("udr").addEventListener("change", function () {
        save_options();
        test()
    })
})