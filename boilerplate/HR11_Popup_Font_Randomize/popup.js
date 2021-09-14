document.addEventListener('DOMContentLoaded', function(){
    var changeFontButton = document.getElementById('changeFont');
    changeFontButton.addEventListener('click', function(){
        chrome.tabs.getSelected(null, (tab) => {
            chrome.tabs.executeScript(tab.id, {
                file: 'inject.js'
            });
        });
    }, false);
}, false);
