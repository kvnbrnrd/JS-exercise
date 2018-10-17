// function zoomin() {
//     var myImg = document.getElementById("map");
//       myImg.style.fontSize = "32px";
//     }

// function zoomout() {
//     var myImg = document.getElementById("map");
//     myImg.style.fontSize = "16px";
// }




// function zoomin() {
//     var myP = document.getElementById("map");
//          if (myP.style.fontSize === "medium")
//     {

//         myP.style.fontSize = "large";
//     }
//     }


//      if (myP.style.fontSize === "large")



var myP = document.getElementById("map");
myP.style.fontSize = "medium";

function zoom() {




    if (myP.style.fontSize === "medium") {
        myP.style.fontSize = "large";
    }
    else if (myP.style.fontSize === "large") {
        myP.style.fontSize = "medium";
    }
    else { }
}
console.log(myP.style.fontSize);
document.getElementById("button").addEventListener("click", zoom);



