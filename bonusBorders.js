
//Toggle used to ensure that the paragraph borders are toggled on/off each time
var toggle = true;
//Will toggle border on/off
function addBorders(){
    //This gets us the two paragraph elements.
    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");

    //This should add a solid border around the first paragraph
    if(toggle)para1.style = "border: 4px solid blue;"
    else para1.style = "";

    //This should add a dashed border around the second paragraph.
    if(toggle)para2.style = "border: 3px dashed red;"
    else para2.style = "";

    //Make the toggle the opposite of whatever it is now
    //False - > true, True - > false.
    toggle =! toggle;
}