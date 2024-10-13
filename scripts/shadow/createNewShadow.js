import { createMainShadow } from "./createMainShadow.js";
import { shadows } from "./shadow.js";

export const createNewShadow = () => {
    while(true) {
        let busyId = false;
        for(let i=0; i<shadows.length-1; i++) {
            if(shadows[shadows.length-1].id == shadows[i].id) {
                busyId = true; break;
            }
        }
        if(busyId == true)
            shadows[shadows.length-1].id++;
        else
            break;
    }
    shadows[shadows.length-1].createListItem();
    shadows.forEach(shadow => { shadow.getElements(); });
    shadows[shadows.length-1].goToEditMode();
    shadows[shadows.length-1].setValues();
    shadows[shadows.length-1].createShadow();
    createMainShadow();
}