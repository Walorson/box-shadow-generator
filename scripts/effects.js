class Effect extends Shadow {
    constructor(right=10,down=10,blur=10,spread=5,color="#000000",inset="",opacity=0.75) {
        super();
        this.right = right;
        this.down = down;
        this.blur = blur;
        this.spread = spread;
        this.color = color;
        this.opacity = opacity;
        this.inset = inset;
    }
}
document.getElementById("effect-hover").onclick = () => {
    shadows.push(new Effect(0,13,13,-7,"#000000"));
    createNewShadow();
}
document.getElementById("effect-sides").onclick = () => {
    shadows.push(new Effect(-10, 0, 13, -7, "#000000"));
    createNewShadow();
    shadows.push(new Effect(10, 0, 13, -7, "#000000"));
    createNewShadow();
}
document.getElementById("effect-button").onclick = () => {
    shadows.push(new Effect(-1, 3, 8, 5, "#ff971f","inset"));
    createNewShadow();
    shadows.push(new Effect(2,5, 16, 0,"#ffae00"));
    createNewShadow();
}
document.getElementById("effect-mirror").onclick = () => {
    shadows.push(new Effect(2,2,2,2,"#ff7e4b","inset"));
    createNewShadow();
    shadows.push(new Effect(11,11,2,0,"#ff9100","inset"));
    createNewShadow();
    shadows.push(new Effect(20,20,2,1,"#ffb61a","inset"))
    createNewShadow();
    shadows.push(new Effect(29,29,2,1,"#ffe180","inset"));
    createNewShadow();
}
document.getElementById("effect-inout").onclick = () => {
    shadows.push(new Effect(5,5,5,0,"#000000"));
    createNewShadow();
    shadows.push(new Effect(4,4,15,0,"#000000","inset"));
    createNewShadow();
}
document.getElementById("effect-gradient").onclick = () => {
    shadows.push(new Effect(0,0,0,5,"#a0a0a0"));
    createNewShadow();
    shadows.push(new Effect(0,10,27,-8,"#131313","inset"));
    createNewShadow();
    shadows.push(new Effect(0,-10,27,-8,"#a31925","inset"));
    createNewShadow();
}
document.getElementById("effect-pile").onclick = () => {
    shadows.push(new Effect(5,5,0,0,"#d39817","",1));
    createNewShadow();
    shadows.push(new Effect(10,10,0,0,"#d39817","",0.8));
    createNewShadow();
    shadows.push(new Effect(15,15,0,0,"#d39817","",0.6));
    createNewShadow();
    shadows.push(new Effect(20,20,0,0,"#d39817","",0.4));
    createNewShadow();
    shadows.push(new Effect(25,25,0,0,"#d39817","",0.2));
    createNewShadow();
}
document.getElementById("effect-rainbow").onclick = () => {
    shadows.push(new Effect(7,-5,10,0,"#4b0082"));
    createNewShadow();
    shadows.push(new Effect(11,-9,10,0,"#0000ff"));
    createNewShadow();
    shadows.push(new Effect(16,-14,10,0,"#00ff00"));
    createNewShadow();
    shadows.push(new Effect(20,-17,10,0,"#ffff00"));
    createNewShadow();
    shadows.push(new Effect(24,-19,10,0,"#ff7f00"));
    createNewShadow();
    shadows.push(new Effect(27,-23,10,0,"#ff0000"));
    createNewShadow();
}
document.getElementById("effect-flames").onclick = () => {
    shadows.push(new Effect(4,-4,15,0,"#ff1f1f"));
    createNewShadow();
    shadows.push(new Effect(12,-11,7,0,"#ff9376"));
    createNewShadow();
    shadows.push(new Effect(20,-5,7,0,"#ffe264"));
    createNewShadow();
    shadows.push(new Effect(20,6,7,0,"#f6ff33"));
    createNewShadow();
    shadows.push(new Effect(13,12,17,0,"#ff9527"));
    createNewShadow();
    shadows.push(new Effect(2,17,17,0,"#ff0000"));
    createNewShadow();
    shadows.push(new Effect(-9,21,18,0,"#fff212"));
    createNewShadow();
    shadows.push(new Effect(-9,6,11,0,"#ff0808"));
    createNewShadow();
    shadows.push(new Effect(-11,-9,11,0,"#fffa17"));
    createNewShadow();
}
document.getElementById("effect-candy").onclick = () => {
    shadows.push(new Effect(5,5,15,5,"#ff8080"));
    createNewShadow();
    shadows.push(new Effect(-9,5,15,5,"#ffe488"));
    createNewShadow();
    shadows.push(new Effect(-7,-5,15,5,"#8cff85"));
    createNewShadow();
    shadows.push(new Effect(12,-5,15,5,"#80c7ff"));
    createNewShadow();
    shadows.push(new Effect(12,10,15,7,"#e488ff"));
    createNewShadow();
    shadows.push(new Effect(10,15,7,0,"#ff616b"));
    createNewShadow();
    shadows.push(new Effect(-10,-7,27,1,"#8e5cff"));
    createNewShadow();
}
document.getElementById("effect-candle").onclick = () => {
    shadows.push(new Effect(0,-1,4,0,"#ffffff"));
    createNewShadow();
    shadows.push(new Effect(0,-2,10,0,"#ffff00"));
    createNewShadow();
    shadows.push(new Effect(0,-10,20,0,"#ff8000"));
    createNewShadow();
    shadows.push(new Effect(0,-18,40,0,"#ff0000"));
    createNewShadow();
}