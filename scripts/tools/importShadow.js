const importShadow = new Window(document.getElementById("manualGenerator"),document.getElementById("manualGenerator").querySelector(".windowQuit"),document.getElementById("manualGeneratorInit"));
importShadow.textarea = importShadow.window.querySelector("textarea");
importShadow.generate = document.getElementById("mgGenerate");
importShadow.info = "";
importShadow.generate.onclick = () => {
    importShadow.hide(); var char;
    importShadow.info = "";
    for(i=12; i<importShadow.textarea.value.length; i++) {
        if(importShadow.textarea.value[i] == ";") char = "";
        else char = importShadow.textarea.value[i];
        importShadow.info += char;
    }
    box.style.boxShadow = importShadow.info;
    importShadow.textarea.value = "box-shadow: ";
}