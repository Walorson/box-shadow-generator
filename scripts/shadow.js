const box = document.querySelector(".preview-box");
const shadowBox = document.getElementById("shadow-preview-box");
const shadowList = document.getElementById("shadow-list");
const clearBtn = document.getElementById("clear-shadow-list-button");
const addShadowBtn = document.getElementById("add-shadow-button");
const shadowOptions = document.getElementById("shadow-options");

let shadows = [];
const checkNumbersOfShadows = () => {
    if(shadows.length <= 0) {   
        shadowOptions.innerHTML = ''; 
        boxs.forEach(box => box.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)");
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
        this.upArrow = null;
        this.downArrow = null;
        this.quitBtn = null;
        this.editMode = false;
        this.layer = shadows.length+1;
        this.shadowInfo = `${this.inset} ${this.right}px ${this.down}px ${this.blur}px ${this.spread}px rgba(${hexToRGB(this.color)},${this.opacity})`;
    }
    createListItem() { shadowList.innerHTML += `<span id="shadow-list-item${this.id}" class="shadow-list-item"><span>Shadow #${this.id}</span><div class="remove">X</div><div class="arrows"><div class="upArrow"></div><div class="downArrow"></div></div></span>`; }
    getElements() {
        this.listMain = document.getElementById(`shadow-list-item${this.id}`);
        this.list = this.listMain.querySelector("span");
        this.quitBtn = this.listMain.querySelector("div");
        this.upArrow = this.listMain.querySelector(".arrows").querySelector(".upArrow");
        this.downArrow = this.listMain.querySelector(".arrows").querySelector(".downArrow");

        this.quitBtn.addEventListener("click",() => {
            this.listMain.remove();
            for(i=0;i<shadows.length;i++) {
                if(shadows[i].id == this.id) { delete shadows[i]; break; } // WYMAZANIE CIENIA Z TABLICY
            }

            shadows = shadows.filter(item => item != undefined);
            checkNumbersOfShadows();

            if(this.editMode == true) { // SZUKANIE PIERWSZEGO WOLNEGO CIENIA DO EDYCJI
                shadows[shadows.length-1].getElements();
                shadows[shadows.length-1].goToEditMode();
            }

            for(let i=0; i<shadows.length; i++) { // ODŚWIEŻENIE ID WARSTWY
                shadows[i].layer = i+1;
            }

            createMainShadow();
        });
        this.upArrow.onclick = () => {
            if(this.layer <= 1) return;

            this.layer--;
            shadows[shadows.indexOf(this)-1].layer++;
            this.changeLayer();
            
        };
        this.downArrow.addEventListener("click",() => {
            if(this.layer >= shadows.length) return;

            this.layer++;
            shadows[shadows.indexOf(this)+1].layer--;
            this.changeLayer();
        });
        this.listMain.addEventListener("mouseover",() => {
            shadowBox.style.boxShadow = this.shadowInfo;
        });
        this.listMain.addEventListener("mouseout",() => {
            for(i=0;i<shadows.length;i++) {
                if(shadows[i].editMode) {
                    shadowBox.style.boxShadow = shadows[i].shadowInfo;
                    break;
                }
            }
        });
        this.list.addEventListener("click",() => {
            this.goToEditMode();
        });
        this.listMain.addEventListener("contextmenu",(e) => {
            e.preventDefault();
            let contextElement = document.getElementById("contextmenu");
            contextElement.style.display = "block";
            setTimeout(() => contextElement.style.opacity = 1,0);
            let x = e.offsetX + this.listMain.offsetLeft + "px"; let y = e.offsetY + this.listMain.offsetTop + "px";
            contextElement.style.transform = `translate(${x},${y})`;

            const moveUp = document.getElementById("moveUp");
            moveUp.onclick = () => {
                shadows.forEach(item => { item.layer++; });
                for(let i=shadows.indexOf(this); i<shadows.length; i++) {
                    shadows[i].layer--;
                }
                this.layer = 1;
                this.changeLayer();
            }
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
        if(this.inset == "inset") inset.setAttribute("checked",";");
        inset.addEventListener("click",() => {
            if(inset.checked) this.inset = "inset";
            else this.inset = "";
            this.createShadow();
        });
        shadowBox.style.boxShadow = this.shadowInfo;
     }
    createShadow() {
        this.shadowInfo = `${this.inset} ${this.right}px ${this.down}px ${this.blur}px ${this.spread}px rgba(${hexToRGB(this.color)},${this.opacity})`;
        shadowBox.style.boxShadow = this.shadowInfo;
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
    changeLayer() {
        const newShadows = [];
            for(let i=1; i<shadows.length+1; i++) {
                for(let j=0; j<shadows.length; j++) {
                    if(shadows[j].layer == i) {
                        newShadows.push(shadows[j]);
                        break;
                    }
                }
            }
            shadows = newShadows;
            shadowList.innerHTML = '';
            shadows.forEach(item => {
                item.createListItem();
            });
            shadows.forEach(item => {
                item.getElements();
                if(item.editMode == true) item.goToEditMode();
            });
            createMainShadow();
    }
}
shadows.push(new Shadow); shadows[0].createListItem(); shadows[0].getElements(); shadows[0].goToEditMode(); //onload
addShadowBtn.addEventListener("click",() => {
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
const createNewShadow = () => {
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