

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
    var cols = null;
    for(var j=0; j<rows.length; j++) {
        cols = rows[j].getElementsByTagName("td");
        for( var i=0; i<cols.length; i++) {
            cols[i].bgColor = getRandomColor();
        }
    }
}