const boxs = document.querySelectorAll(".preview-box");
const copyBtn = document.getElementById("button-copy");

function selectText(containerid) {
    if (document.selection) { // If the browser is IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) { // If It's not IE
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
let messageCount=1;
function createMessage(message) {
    const messages = document.getElementById("messages");
    const element = document.createElement("div");
    element.setAttribute("id","message"+messageCount)
    messages.appendChild(element);
    
    const newMessage = messages.querySelector("#message"+messageCount);
    newMessage.innerHTML = '<i class="icon-info"></i>'+message;
    messageCount++;
    setTimeout(function() { newMessage.style.opacity = 1; newMessage.style.padding = "28px 20px"; newMessage.style.fontSize = "2rem"; },0);
    setTimeout(function() {
        newMessage.style.opacity = 0;
        setTimeout(function() { messages.removeChild(newMessage); },350);
    },3000)
}
function copy() {
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    createMessage("Command has been copied.");
}
copyBtn.onclick = function() {
    selectText("shadow-info");
    copy();
}
const boxColor = document.getElementById("box-color");
const backgroundColor = document.getElementById("background-color");

boxColor.oninput = function() { boxs.forEach(item => item.style.backgroundColor = boxColor.value) }
backgroundColor.oninput = function() { 
    document.querySelector(".preview").style.backgroundColor = backgroundColor.value;
    document.querySelector(".shadow-preview").style.backgroundColor = backgroundColor.value;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
const previewInputs = document.querySelectorAll(".preview-attr");
previewInputs.forEach(item => {
    const range = item.querySelector("input");
    const number = item.querySelector(".count");
    range.oninput = () => {
        number.value = range.value;
        setPreviewValues();
    }
    number.oninput = () => {
        range.value = number.value
        setPreviewValues();
    }
});
const setPreviewValues = () => {
    boxs.forEach(box => box.style.borderRadius = document.getElementById("border-radius").value+"%");
    boxs.forEach(box => box.style.width = document.getElementById("preview-width").value+"px");
    boxs.forEach(box => box.style.height = document.getElementById("preview-height").value+"px");
}
const setDefaultBtn = document.getElementById("set-default");
setDefaultBtn.addEventListener("click",() => {
    document.getElementById("border-radius").value = 0;
    document.getElementById("preview-width").value = 190;
    document.getElementById("preview-height").value = 150;
    boxColor.value = "#e2b00c";
    backgroundColor.value = "#fff8ea";
    previewInputs.forEach(box => { box.querySelector(".count").value = box.querySelector("input").value; });
    boxs.forEach(item => item.style.backgroundColor = boxColor.value);
    document.querySelector(".preview").style.backgroundColor = backgroundColor.value;
    document.querySelector(".shadow-preview").style.backgroundColor = backgroundColor.value;
    setPreviewValues();
});
window.addEventListener("click",() => {
    setTimeout(() => document.getElementById("contextmenu").style.display = "none",200);
    document.getElementById("contextmenu").style.opacity = 0;
});
////////////////// NO JAVASCRIPT ERROR ////////////////////////
const javascriptError = document.getElementById("javascriptError");
const javascriptErrorBlur = document.getElementById("javascriptError-background-blur");
javascriptError.remove();
javascriptErrorBlur.remove();