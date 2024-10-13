import { Window } from "../window.js";

export function importShadow()
{
    const box = document.querySelector(".preview-box");
    const importShadow = new Window(
        document.getElementById("manualGenerator"),
        document.getElementById("manualGenerator").querySelector(".windowQuit"),
        document.getElementById("manualGeneratorInit")
    );
    
    const textarea = importShadow.window.querySelector("textarea");
    const generate = document.getElementById("mgGenerate");
    let info = "";
    
    generate.onclick = () => {
        importShadow.hide(); 
        let char;
        info = "";
    
        for(i=12; i<textarea.value.length; i++) 
        {
            if(textarea.value[i] == ";") 
            {
                char = "";
            }
            else 
            {
                char = textarea.value[i];
            }
    
            info += char;
        }
        
        box.style.boxShadow = info;
        textarea.value = "box-shadow: ";
    }
}