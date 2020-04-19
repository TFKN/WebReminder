/**
 * URLの更新時にチェックして
 * 指定したURLだったら音楽を再生する
 */

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
    console.log(tab.url);
    target_url = 'https://www.irasutoya.com/search?q=%E3%82%B9%E3%83%94%E3%83%BC%E3%82%AB%E3%83%BC';
    target_audio = './music/reminder.wav';
    if(info.status === "complete"){
        if(tab.url === target_url){
            var audio = new Audio();
            audio.src = target_audio;
            audio.load();
            audio.play();
        }
    }
});