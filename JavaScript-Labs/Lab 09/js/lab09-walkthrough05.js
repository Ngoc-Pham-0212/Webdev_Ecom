
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}
window.addEventListener("load", function() {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});

/* your code goes here */
var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);
