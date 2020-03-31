var contextMenus = {};

contextMenus.createCounterString = 
    chrome.contextMenus.create(
        {
            "title":"Some Title",
            "contexts":["selection"]
        },
        function (){
            if (chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

function contextMenuHandler(info, tab){
    if (info.menuItemId === contextMenus.createCounterString){
        console.log(tab)

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "WantDefinition"}, function(response) {});  
        });
    }
    
}

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

