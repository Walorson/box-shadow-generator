/// Functions by Szymon Gniadek ///
function hexToRGB(hex) {
    hex = hex.substr(1);
    let red1 = hex[0], red2 = hex[1];
    let green1 = hex[2], green2 = hex[3];
    let blue1 = hex[4], blue2 = hex[5];
    
    let rgb = new Array(red1,red2,green1,green2,blue1,blue2);
    for(i=0; i<=5; i++) {
        switch(rgb[i]) {
            case 'a': rgb[i] = "10"; break;
            case 'b': rgb[i] = "11"; break;
            case 'c': rgb[i] = "12"; break;
            case 'd': rgb[i] = "13"; break;
            case 'e': rgb[i] = "14"; break;
            case 'f': rgb[i] = "15"; break;
        }
    }
    red1 = rgb[0]; red2 = rgb[1]; green1 = rgb[2]; green2 = rgb[3]; blue1 = rgb[4]; blue2 = rgb[5];

    let red = parseInt(red1*16) + parseInt(red2);
    let green = parseInt(green1*16) + parseInt(green2);
    let blue = parseInt(blue1*16) + parseInt(blue2);

    return red+","+green+","+blue;
}
function rgbToHex(r,g,b) {
    let red1 = parseFloat(Math.floor(r/16));
    let red2 = parseFloat(((r/16) - Math.floor(r/16))*16);
    let green1 = parseFloat(Math.floor(g/16));
    let green2 = parseFloat(((g/16) - Math.floor(g/16))*16);
    let blue1 = parseFloat(Math.floor(b/16));
    let blue2 = parseFloat(((b/16) - Math.floor(b/16))*16);

    let rgb = new Array(red1,red2,green1,green2,blue1,blue2);
    for(i=0; i<=5; i++) {
        switch(rgb[i]) {
            case 10: rgb[i] = "a"; break;
            case 11: rgb[i] = "b"; break;
            case 12: rgb[i] = "c"; break;
            case 13: rgb[i] = "d"; break;
            case 14: rgb[i] = "e"; break;
            case 15: rgb[i] = "f"; break;
        }
    }
    red1 = rgb[0]; red2 = rgb[1]; green1 = rgb[2]; green2 = rgb[3]; blue1 = rgb[4]; blue2 = rgb[5];

    return "#"+red1+red2+green1+green2+blue1+blue2;
}