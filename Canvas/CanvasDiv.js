var canvasDiv=document.getElementById('canvas');
var flag = false;
canvasDiv.onmousedown=function (ev0) {
    flag=true;
    var x=ev0.clientX;
    var y=ev0.clientY;
    var newDiv=document.createElement('div');
    newDiv.style="width: 6px;\n" +
        "    height: 6px;\n" +
        "    border-radius: 3px;\n" +
        "    background-color: #000;\n" +
        "    position: absolute;\n"+
        "left:"+(x-3)+"px;top:"+(y-3)+"px;";
    canvasDiv.appendChild(newDiv);
};
canvasDiv.onmousemove=function (ev1) {
    if (flag){
        var x=ev1.clientX;
        var y=ev1.clientY;
        var newDiv=document.createElement('div');
        newDiv.style="width: 6px;\n" +
            "    height: 6px;\n" +
            "    border-radius: 3px;\n" +
            "    background-color: #000;\n" +
            "    position: absolute;\n"+
            "left:"+(x-3)+"px;top:"+(y-3)+"px;";
        canvasDiv.appendChild(newDiv);
    }
};
canvasDiv.onmouseup=function (ev2) {
    flag=false;
};