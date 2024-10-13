import { shadows } from "./shadow.js";

let mainShadow = "";
const box = document.querySelector(".preview-box");

export function createMainShadow() 
{
    mainShadow = "";
    for(let i=0; i<shadows.length; i++) {
        mainShadow += shadows[i].shadowInfo+",";
    }
    mainShadow = mainShadow.replaceAt(mainShadow.length-1," ");
    box.style.boxShadow = mainShadow;
    document.getElementById("shadow-info").textContent = "box-shadow: "+mainShadow.replaceAt(mainShadow.length-1,";");
}

String.prototype.replaceAt = function(index, replacement) {
    return this.slice(0, index) + replacement + this.slice(index + replacement.length);
}