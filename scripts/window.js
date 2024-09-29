const backgroundBlur = document.getElementById("background-blur");
class Window {
    constructor(window,quitBtn,initBtn) {
        this.window = window;
        this.quitBtn = quitBtn;
        this.initBtn = initBtn;

        initBtn.onclick = () => {
            backgroundBlur.style.zIndex = 90;
            backgroundBlur.style.opacity = 1;
            window.style.display = "block";
            setTimeout(function(){ window.style.opacity = 1; },0);

        }
        function hide() { 
            setTimeout(function(){ backgroundBlur.style.zIndex = -90; },300); 
            backgroundBlur.style.opacity = "0";
            window.style.opacity = 0;
            setTimeout(function(){ window.style.display = "none"; },300);
        }
        quitBtn.onclick = () => { hide(); }
        backgroundBlur.onclick = () => { hide(); }
    }
    hide() {
        setTimeout(function(){ backgroundBlur.style.zIndex = -90; },300); 
        backgroundBlur.style.opacity = "0";
        this.window.style.opacity = 0;
        this.window.style.display = "none";
    }
}