function hideChat() {
    var x = document.getElementById("side").parentElement;
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("https://web.whatsapp.com/")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: hideChat
        });
    }
});