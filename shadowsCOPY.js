const box = document.querySelector(".preview-box");
const shadowList = document.getElementById("shadow-list");
const clearBtn = document.getElementById("clear-shadow-list-button");
const addShadowBtn = document.getElementById("add-shadow-button");
const shadowOptions = document.getElementById("shadow-options");

let shadows = [];
const checkNumbersOfShadows = () => {
    if(shadows.length <= 0) {   
        shadowOptions.innerHTML = ''; 
        box.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
    }
}
class Shadow {
    constructor() {
        this.id = 1;
        this.right = 10;
        this.down = 10;
        this.blur = 10;
        this.spread = 5;
        this.opacity = 0.75;
        this.inset = "";
        this.color = "#000000";
        this.list = null;
        this.quitBtn = null;
        this.editMode = false;
        this.shadowInfo = `${this.inset} ${this.right}px ${this.down}px ${this.blur}px ${this.spread}px rgba(${hexToRGB(this.color)},${this.opacity})`;
    }
    createListItem() { shadowList.innerHTML += `<span id="shadow-list-item${this.id}" class="shadow-list-item"><span>Shadow #${this.id}</span><div>X</div></span>`; }
    getElements() {
        this.listMain = document.getElementById(`shadow-list-item${this.id}`);
        this.list = this.listMain.querySelector("span");
        this.quitBtn = this.listMain.querySelector("div");

        this.quitBtn.addEventListener("click",() => {
            this.listMain.remove();
            for(i=0;i<shadows.length;i++) {
                if(shadows[i].id == this.id) { delete shadows[i]; break; }
            }

            shadows = shadows.filter(item => item != undefined);
            checkNumbersOfShadows();

            if(this.editMode == true) {
                for(let i=shadows.length-1;i>=0;i--) {
                    shadows[i].goToEditMode(); shadows[i].getElements(); break;
                }
            }

            createMainShadow();
        });
        this.list.addEventListener("click",() => {
            this.goToEditMode();
        });
    }
    goToEditMode() { 
        for(let i=0; i<shadows.length; i++) { 
            shadows[i].editMode = false;
        }
        this.editMode = true;
        shadowOptions.innerHTML = `<p class="attr"><span class="attr-name">Shift Right:</span> <input type="range" value="${this.right}" min="-50" max="50"><input type="number" class="count" value="${this.right}" id="right"></p>
        <p class="attr"><span class="attr-name">Shift Down:</span> <input type="range" value="${this.down}" min="-50" max="50"><input type="number" class="count" value="${this.down}" id="down"></p>
        <p class="attr"><span class="attr-name">Blur:</span><input type="range" max="50" value="${this.blur}"><input type="number" class="count" value="${this.blur}" id="blur"></p>
        <p class="attr"><span class="attr-name">Spread:</span> <input type="range" min="-25" max="50" value="${this.spread}"><input type="number" class="count" value="${this.spread}" id="spread"></p>
        <p class="attr"><span class="attr-name">Opacity:</span> <input type="range" max="1" step="0.01" value="${this.opacity}"><input type="number" class="count" value="${this.opacity}" id="opacity"></p>
        <p><span class="attr-name">Inset:</span><input type="checkbox" id="inset"></p>
        <p class="attr"><span class="attr-name">Color:</span><input type="color" value="${this.color}"><input type="text" class="count" id="color" value="${this.color}" disabled></p>`;

        shadows.forEach(item => { item.list.style.backgroundColor = "#2b2b2b"; });
        this.list.style.backgroundColor = "#093d00";

        const attr = document.querySelectorAll(".attr");
        attr.forEach(item => {
            const count = item.querySelector(".count");
            const input = item.querySelector("input");
            count.oninput = () => {
                input.value = count.value;
                this.setValues();
                this.createShadow();
            }
            input.oninput = () => {
                count.value = input.value;
                this.setValues();
                this.createShadow();
            }
        });
        const inset = document.getElementById("inset");
        inset.addEventListener("click",() => {
            if(inset.checked) this.inset = "inset";
            else this.inset = "";
            this.createShadow();
        });
     }
    createShadow() {
        this.shadowInfo = `${this.inset} ${this.right}px ${this.down}px ${this.blur}px ${this.spread}px rgba(${hexToRGB(this.color)},${this.opacity})`;
        createMainShadow();
    }
    setValues() {
        this.right = document.getElementById("right").value;
        this.down = document.getElementById("down").value;
        this.blur = document.getElementById("blur").value;
        this.spread = document.getElementById("spread").value;
        this.opacity = document.getElementById("opacity").value;
        this.color = document.getElementById("color").value;
    }
}
shadows.push(new Shadow); shadows[0].createListItem(); shadows[0].getElements(); shadows[0].goToEditMode(); //onload
addShadowBtn.addEventListener("click",() => {
    shadows.push(new Shadow);
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
    createMainShadow();
});
clearBtn.addEventListener("click",() => {
    shadowList.innerHTML = "";
    shadows = []; shadows.push(new Shadow);
    shadows[0].createListItem();
    shadows[0].getElements();
    shadows[0].goToEditMode();
    createMainShadow();
});

let mainShadow = "";
const createMainShadow = () => {
    mainShadow = "";
    for(let i=0; i<shadows.length; i++) {
        mainShadow += shadows[i].shadowInfo+",";
    }
    mainShadow = mainShadow.replaceAt(mainShadow.length-1," ");
    box.style.boxShadow = mainShadow;
    document.getElementById("shadow-info").textContent = "box-shadow: "+mainShadow.replaceAt(mainShadow.length-1,";");
}
const boxBorderRadius = document.getElementById("border-radius");
boxBorderRadius.oninput = function() { box.style.borderRadius = boxBorderRadius.value+"%"; document.getElementById("border-radius-number").value = boxBorderRadius.value; }