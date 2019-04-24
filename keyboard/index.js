var key = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];
// var web={
//     'q':'qq.com',
//     'w':'weibo.com',
//     'e':'ele.me',
//     'u':'uc.com',
//     'a':'alibaba.com',
//     'z':'zhihu.com',
// };

for (var i = 0; i < key.length; i++) {
    var newDv = document.createElement('div');
    document.getElementById("keyboard").appendChild(newDv);
    for (var j = 0; j < key[i].length; j++) {
        var newKbd = document.createElement('kbd');
        newKbd.textContent = key[i][j];
        newKbd.classList.add('letter');
        newKbd.classList.add(key[i][j]);
        newDv.appendChild(newKbd);
    }
    // var newBr=document.createElement('br')
    // newDv.appendChild(newBr);
}

// document.onkeypress=function (ev) {
//     var keyB=ev['key'];
//     for (var i=0;i<key.length;i++){
//         for (var j=0;j<key[i].length;j++){
//             if (keyB==key[i][j]) {
//                 if (web[keyB]!=undefined){
//                     window.open('https://www.' + web[keyB]);
//                 }
//             }
//         }
//     }
// }

document.onkeypress = function (ev) {
    var keyB = ev['key'];
    var kdbObj = $('kbd');
    for (var m = 0; m < kdbObj.length; m++) {
        if (kdbObj[m].className == 'letter ' + keyB) {
            kdbObj[m].classList.add('hover');
        }
    }
};
document.onkeyup = function (ev) {
    var kdbObj = $('kbd');
    for (var m = 0; m < kdbObj.length; m++) {
        kdbObj[m].classList.remove('hover');

    }
};