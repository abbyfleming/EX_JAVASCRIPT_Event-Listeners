
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

/* --- BOLD --- */

var section = document.getElementsByTagName("section");

function addBold() {
	section[0].classList = "bold";
	section[5].classList.add("bold", "italic");
}

window.addEventListener("load", addBold); 

/* --- MOUSEOVER --- */

var heading = document.getElementById("page-title");

heading.addEventListener("mouseover", function(){
	output.innerHTML = "You moved your mouse over the header";
});

heading.addEventListener("mouseout", function(){
	output.innerHTML = "You left me!!"
});

/* --- SECTION CLICK --- */
//When any section is clicked the output target text should be "You clicked on the {text of the section} section"

//output.innerHTML = "You clicked on the " "x" " section.";

/* --- BLOCK ELEMENTS --- */
var buttons = document.getElementsByTagName("button");

function addBlock(){
	for (i = 0; i < buttons.length; i++) {
	buttons[i].classList.add("buttonBlock");
	}
};

window.addEventListener("load", addBlock);







