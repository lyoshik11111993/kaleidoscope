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
            document.getElementById("1").bgColor = document.getElementById("1_2").bgColor;
            document.getElementById("2").bgColor = document.getElementById("2_2").bgColor;
            document.getElementById("3").bgColor = document.getElementById("3_2").bgColor;
            document.getElementById("4").bgColor = document.getElementById("4_2").bgColor;
            document.getElementById("5").bgColor = document.getElementById("5_2").bgColor;
            document.getElementById("6").bgColor = document.getElementById("6_2").bgColor;
            document.getElementById("7").bgColor = document.getElementById("7_2").bgColor;
            document.getElementById("8").bgColor = document.getElementById("8_2").bgColor;
            document.getElementById("9").bgColor = document.getElementById("9_2").bgColor;
            document.getElementById("10").bgColor = document.getElementById("10_2").bgColor;
            document.getElementById("11").bgColor = document.getElementById("11_2").bgColor;
            document.getElementById("12").bgColor = document.getElementById("12_2").bgColor;
            document.getElementById("13").bgColor = document.getElementById("13_2").bgColor;
            document.getElementById("14").bgColor = document.getElementById("14_2").bgColor;
            document.getElementById("15").bgColor = document.getElementById("15_2").bgColor;
            document.getElementById("16").bgColor = document.getElementById("16_2").bgColor;
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