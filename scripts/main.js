import { selectText } from "./selectText.js";
import { createMessage } from "./createMessage.js";
import { setDefaultValues } from "./setDefaultValues.js";
import { loadEffects } from "./effects.js";

const copyBtn = document.getElementById("button-copy");
const setDefaultBtn = document.getElementById("set-default");

function copy() {
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    createMessage("Command has been copied.");
}
copyBtn.onclick = function() {
    selectText("shadow-info");
    copy();
}

window.addEventListener("click",() => {
    setTimeout(() => document.getElementById("contextmenu").style.display = "none",200);
    document.getElementById("contextmenu").style.opacity = 0;
});

window.addEventListener("load", loadEffects)

setDefaultBtn.addEventListener("click", setDefaultValues);

////////////////// NO JAVASCRIPT ERROR ////////////////////////
const javascriptError = document.getElementById("javascriptError");
const javascriptErrorBlur = document.getElementById("javascriptError-background-blur");
javascriptError.remove();
javascriptErrorBlur.remove();