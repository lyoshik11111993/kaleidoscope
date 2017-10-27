function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColor() {
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    var cols;
    for (var j = 0; j < rows.length; j++) {
        cols = rows[j].getElementsByTagName("td");
        for (var i = 0; i < cols.length; i++) {
            cols[i].bgColor = getRandomColor();
        }
    }
}

function autoAnimation(fnc, delay) {
    var interval = setInterval(fnc, delay);
    fnc();
    var block = document.getElementById("auto_animation");
    var oldP = document.getElementById("auto_animation_p");
    var oldBtn = document.getElementById("auto_animation_btn");
    var p = document.createElement("p");
    p.innerHTML = "   Tired of watching? -> ";
    var btn = document.createElement("button");
    btn.innerHTML = "Stop Animation";
    block.replaceChild(p, oldP);
    block.replaceChild(btn, oldBtn);
    btn.onclick = function () {
        clearInterval(interval);
        block.replaceChild(oldP, p);
        block.replaceChild(oldBtn, btn);
    };
}