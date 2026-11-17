/* put your DOM code here */
$(function () {
    // create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg" >');
    // insert the new element before the panel
    var panel = $('.panel');
    img.insertBefore(panel);
});
