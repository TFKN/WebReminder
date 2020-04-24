/**Saveボタンを押したときに保存 */
document.getElementById("save").onclick = function() {
  chrome.storage.local.set({"URL": document.getElementById("URL").value}, function () {
    console.log('Saved URL')
    console.log(document.getElementById("URL").value)
  });  
};