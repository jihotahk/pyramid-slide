
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");
    heightStr = document.getElementById("height-slider").value;
    symbol = document.getElementById("symbol").value;
    // here we convert the string to an int
    height = parseInt(heightStr);
    drawPyramid(height,symbol);

}


// find pyramid div and draw
var pyramidDiv = document.getElementById("pyramid");
var pyramid = determineHeightAndThenDrawPyramid();
pyramid.appendChild(pyramid)
//add event listener on brick symbol

//add event listener on height
button.addEventListener("click", function(event) {
  determineHeightAndThenDrawPyramid();
});


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height, symbol) {

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
