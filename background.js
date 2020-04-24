/**
 * URLの更新時にチェックして
 * 指定したURLだったら音声を再生する
 */

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
    console.log('Requested URL');
    console.log(tab.url);
    target_audio = './sounds/reminder.wav';
    if(info.status === "complete"){
        chrome.storage.local.get("URL", function (value) {
            console.log('value.URL');
            console.log(value.URL);
            if(tab.url == value.URL){
                var audio = new Audio();
                audio.src = target_audio;
                audio.load();
                audio.play();
            }
        });
    }
});