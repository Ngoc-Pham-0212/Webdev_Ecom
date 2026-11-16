
/* add code here */
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bổ sung vòng lặp in các ngày từ 1 đến 30 (mỗi hàng 7 ngày)
document.write("<tr>");
for (var d = 1; d <= 30; d++) {
    document.write("<td>" + d + "</td>");
    if (d % 7 == 0 && d < 30) {
        document.write("</tr><tr>");
    }
}
document.write("</tr>");
document.write("</table>");
