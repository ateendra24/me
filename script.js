function on(){
    document.getElementById("learn_more").style.visibility = "visible";
    document.getElementById("learn_more").style.left = "50%";
    document.getElementById("learn_more").style.display = "block";
}

function off(){
    document.getElementById("learn_more").style.left = "-50%";
    document.getElementById("learn_more").style.visibility = "hidden";
    document.getElementById("learn_more").style.display = "none";
}


function coordinate(event) {
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById("X").value=x;
    document.getElementById("Y").value=y;
}

function menu_on(){
    document.getElementById("mobile_menu").style.top = "0";
}
function menu_off(){
    document.getElementById("mobile_menu").style.top = "-300px";
}


