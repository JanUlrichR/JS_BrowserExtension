chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'WantDefinition') {
        let selectedText = document.getSelection().toString();
        if (selectedText.length > 0){
            var requestURL = 'https://en.wikipedia.org/api/rest_v1/page/summary/'+selectedText;
            //var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                var jsonAnswer = request.response;
                console.log(jsonAnswer);
            }
            }
    }
    });


