/**
 * render Pyramid
 *
 * Determines the symbol and height from user input/change,
 * and then calls pyramid with that symbol and height.
 */
function renderPyramid() {

    // retrieve the current values of symbol
    symbol = document.getElementById("symbol").value;

    // retrieve the current values of height
    heightStr = document.getElementById("height-slider").value;

    // here we convert the string to an int
    height = parseInt(heightStr);
    drawPyramid(height,symbol);
}

function drawPyramid(height, symbol) {
    //clear pyramid with each change
    document.getElementById("pyramid").innerHTML = "";


    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += " ";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

       // create a text element with the string of characters
       textElem = document.createTextNode(rowStr);

       // create a <p> element with the text inside
       rowElem = document.createElement("p");
       rowElem.appendChild(textElem);

       // insert the paragraph as a child of the container <div>
       document.getElementById("pyramid").appendChild(rowElem);
   }
}

// draw pyramid initially
renderPyramid();

//add event listener on brick symbol
var dropdown = document.getElementById("symbol");
dropdown.addEventListener("input", function(event) {
  renderPyramid();
});

//add event listener on height slider change
var heightSlider = document.getElementById("height-slider");
heightSlider.addEventListener("change", function(event) {
  renderPyramid();
})
