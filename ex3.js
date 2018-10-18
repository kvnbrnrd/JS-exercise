var square = document.getElementById("carre")
square.style.height = "100px";
square.style.width = "100px";
square.style.backgroundColor = "blue";
square.style.position = "relative";
square.style.top = "100px";
document.addEventListener("keydown",KeyPress);
document.addEventListener("keyup", KeyRelease);

function KeyPress(e)
{
    if (e.keyCode === 38)
    {
        square.style.top = "0px";  
    }  
}

function KeyRelease(e)
{
    if (e.keyCode === 38)
    {
        square.style.top = "100px";
    }
}
