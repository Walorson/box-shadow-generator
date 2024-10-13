import { shadowList, shadows, Shadow } from "./shadow.js";
import { createMainShadow } from "./createMainShadow.js";

export function clearAllShadows()
{
    shadowList.innerHTML = "";
    shadows = []; 
    shadows.push(new Shadow);
    shadows[0].createListItem();
    shadows[0].getElements();
    shadows[0].goToEditMode();
    createMainShadow();
}