var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var actualUrl = ""

var inputText = document.querySelector(".input");
var translateBtn = document.querySelector(".btn-primary");
var outputDiv = document.querySelector(".output");

function errorHandler(error){
    console.log("Error occured : " + error);
}

function getURL(text){
    return serverUrl + "?text=" + text;
}

function clickHandle(){
    var text = inputText.value;
    fetch(getURL(text)).then(response => response.json()).then(json => outputDiv.innerHTML = json.contents.translated).catch(errorHandler);
}




translateBtn.addEventListener("click", clickHandle);