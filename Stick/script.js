let myDiv = document.getElementById("my-div");

document.addEventListener("mousemove",(e) => {
    move(e)
})

const move = (e) => {
    var x = e.pageX;
    var y = e.pageY;
    console.log(x,y);
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
}