chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.tabs.create({url: "https://sites.google.com/view/pornhubvideodownload-novkautho/"}, function () {
            console.log("New tab launched with HELP page https://sites.google.com/view/pornhubvideodownload-novkautho/");
        });
    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});

