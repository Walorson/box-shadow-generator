
export const boxs = document.querySelectorAll(".preview-box");
export const boxColor = document.getElementById("box-color");
export const backgroundColor = document.getElementById("background-color");
export const previewInputs = document.querySelectorAll(".preview-attr");

boxColor.oninput = function() 
{ 
    boxs.forEach(item => item.style.backgroundColor = boxColor.value) 
}

backgroundColor.oninput = function()
{ 
    document.querySelector(".preview").style.backgroundColor = backgroundColor.value;
    document.querySelector(".shadow-preview").style.backgroundColor = backgroundColor.value;
}

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

export function setPreviewValues() 
{
    boxs.forEach(box => box.style.borderRadius = document.getElementById("border-radius").value+"%");
    boxs.forEach(box => box.style.width = document.getElementById("preview-width").value+"px");
    boxs.forEach(box => box.style.height = document.getElementById("preview-height").value+"px");
}