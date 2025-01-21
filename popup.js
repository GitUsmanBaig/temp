document.getElementById('saveBtn').addEventListener('click', function() {
  var color = document.getElementById('colorPicker').value;
  chrome.storage.sync.set({priceColor: color});
});
