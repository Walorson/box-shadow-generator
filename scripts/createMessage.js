let messageCount=1;

export function createMessage(message) 
{
    const messages = document.getElementById("messages");
    const element = document.createElement("div");
    element.setAttribute("id","message"+messageCount)
    messages.appendChild(element);
    
    const newMessage = messages.querySelector("#message"+messageCount);
    newMessage.innerHTML = '<i class="icon-info"></i>'+message;
    messageCount++;

    setTimeout(function() 
    { 
        newMessage.style.opacity = 1; 
        newMessage.style.padding = "28px 20px"; 
        newMessage.style.fontSize = "2rem"; 
    }, 0);

    setTimeout(function() 
    {
        newMessage.style.opacity = 0;
        setTimeout(function() 
        { 
            messages.removeChild(newMessage); 
        }, 350);
    }, 3000);
}