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

function colorGreen() 
{

    if (square.style.backgroundColor == "blue");
    {
        square.style.backgroundColor = "green";
    }
}

function colorBlue() 
{

    if (square.style.backgroundColor == "green");
    {
        square.style.backgroundColor = "blue";
    }
}

function hideSquare()
{
    if (square.style.display == "initial");
    {
        square.style.display = "none";
    }

}

function showSquare()
{
    if (square.style.display == "none");
    {
        square.style.display = "block";
    }

}
