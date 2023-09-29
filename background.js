chrome.runtime.onMessage.addlistener((message, sender, sendResponse) => {
    if (message.action === "executeScript") {
        chrome.scripting.executeScript({
            target: {tabId: message.tabId},
            files: ['contentScript.js']
        });
    }
});