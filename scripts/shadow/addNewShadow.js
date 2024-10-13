import { shadows, Shadow } from "./shadow.js";
import { createNewShadow } from "./createNewShadow.js";

export function addNewShadow()
{
    shadows.push(new Shadow);
    if(shadows.length > 1) {
        const s = shadows[shadows.length-2]; // s = poprzedni cień
        const n = shadows[shadows.length-1]; // n = nowy cień
        n.right = s.right;
        n.down = s.down;
        n.blur = s.blur;
        n.spread = s.spread;
        n.opacity = s.opacity;
        n.inset = n.inset;
        n.color = s.color;
    }
    createNewShadow();
}