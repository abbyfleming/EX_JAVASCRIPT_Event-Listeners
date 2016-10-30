var pageTitle = document.getElementById("page-title");
var output = document.getElementById("output-target");
var input = document.getElementById("keypress-input");
var GuineaPig = document.getElementById("guinea-pig");


/* --- MIRROR INPUT & OUTPUT --- */

input.addEventListener("keyup", function(){
    var userInput = input.value;
    output.innerHTML = userInput;
});


/* --- ADD COLOR --- */

var addColorBtn = document.getElementById("add-color");

function makeBlue(){
	GuineaPig.classList = "blue";
}
addColorBtn.addEventListener("click", makeBlue);


/* --- MAKE LARGER --- */

var hulkBtn = document.getElementById("make-large");

function hulkify(){
	GuineaPig.classList = "hulkify";
}
hulkBtn.addEventListener("click", hulkify);

/* --- MAKE BORDER --- */

var borderBtn = document.getElementById("add-border");

function addBorder() {
	GuineaPig.classList = "border";
}

borderBtn.addEventListener("click", addBorder);


/* --- ADD ROUNDING --- */

var roundingBtn = document.getElementById("add-rounding");

function addRounding() {
	GuineaPig.classList.add("border","rounding");
}

roundingBtn.addEventListener("click", addRounding);


/* --- BUBBLING --- */
//The order is called a bubbling order, because an event bubbles from the innermost element up through parents, like a bubble of air in the water.
//The first section's text should be bold.
//The last section's text should be bold and italicized.

// var sections = document.getElementsByTagName("section");
// var article = document.getElementsByClassName("article-section");

// function bold() {
// 	article.classList.add("bold");
// 	console.log("bold");
// }
 
// for(var i=0; i<sections.length; i++) {
//   sections[i].addEventListener("load", bold, true);
//   console.log("It's loading the section " + i);
// };



/* --- MOUSEOVER --- */







