chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({priceColor: 'red'}); // Default color
});
