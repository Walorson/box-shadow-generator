import { boxs, boxColor, backgroundColor, previewInputs, setPreviewValues } from "./preview.js";

export function setDefaultValues()
{
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
}