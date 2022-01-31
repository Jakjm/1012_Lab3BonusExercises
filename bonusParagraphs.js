function combineParagraphs(){
    var para1 = document.getElementById("para1");
    var para2 = document.getElementById("para2");
    
    //Get the text values input to the two text areas.
    var textOne = para1.value;
    var textTwo = para2.value;

    //Print the content of the two paragraphs.
    //console.log(textOne);
    //console.log(textTwo);


    //Div that our new paragraph will go in
    var paraDiv = document.getElementById("paraDiv");

    //Create a new paragraph element.
    var newPara = document.createElement("p");
    //Add the first paragraph and second paragraph, separated by a breakline.
    newPara.innerHTML = textOne + " <br> "  + textTwo;

    //Add our new paragraph to the paraDiv.
    //Add before the first child of the paraDiv - will still work if paraDiv has no first child.
    paraDiv.insertBefore(newPara,paraDiv.firstChild);
}