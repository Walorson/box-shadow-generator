export function selectText(containerid) 
{
    if (document.selection) { // If the browser is IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } 
    else if (window.getSelection) { // If It's not IE
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}