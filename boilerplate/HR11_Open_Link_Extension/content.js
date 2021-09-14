chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "clicked_browser_action") {
            var links = document.getElementsByTagName('a');

            var i = 0;
            while(links[i]['href'] === ''){
                i++;
            }
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": links[i]['href']});
        }
    }
);
