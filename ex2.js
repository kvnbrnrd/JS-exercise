var square = document.getElementById("carre")
square.style.height = "100px";
square.style.width = "100px";
square.style.backgroundColor = "blue";

function incHeight()
{
    
    var height = square.offsetHeight;
    var newHeight = height + 10;
    square.style.height = newHeight + 'px';

    if (height > 300)
    {
        square.style.height = "100px";
    }
}
