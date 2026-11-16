/* add code below this */
// 1. So sánh String object và String literal
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("<br>typeof stringOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);

if (stringOne == stringTwo)
    document.write("<br>stringOne has = value to stringTwo");
if (stringOne == stringFour)
    document.write("<br>stringOne has = value to stringFour");
if (stringOne === stringTwo)
    document.write("<br>stringOne has = value and type to stringTwo");
if (stringTwo === stringThree)
    document.write("<br>stringTwo has = value and type to stringThree");
if (stringTwo === stringFour)
    document.write("<br>stringTwo has = value and type to stringFour");

// 2. Đối tượng Date
var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

// 3. Đối tượng Math
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
