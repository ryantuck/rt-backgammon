// javascript handling for backgammon

$(document).ready(function(){
	circleClick();
	rollClick();
});

// ========================================================
// Variables
// ========================================================

var d1 = 0;
var d2 = 0;

var gDirection = "clockwise";
var pDirection = "counterclockwise";

var posArray = [
	"x1", "x2", "x3", "x4", "x5", "x6",
	"x7", "x8", "x9", "x10", "x11", "x12",
	"x13", "x14", "x15", "x16", "x17", "x18", 
	"x19", "x20", "x21", "x22", "x23", "x24" ];
	
// ========================================================
// Dice Handling
// ========================================================

function oneDie()
{
	return Math.floor(Math.random()*6 + 1);
}

function rollDice()
{
	assignNewDiceVals();
	setDiceText();
}

function assignNewDiceVals()
{
	d1 = oneDie();
	d2 = oneDie();
}

function setDiceText()
{
	$("#d1p").text(d1);
	$("#d2p").text(d2);
}

function rollClick()
{
	$("#rollbutton").click(function(){
		rollDice();
		alert(posArray.length);
	});
}

// ========================================================
// Piece click handling
// ========================================================

function circleClick()
{
	$(".circle").click(function(){
		deSelectAll();
		$(this).addClass("selected");
		alert(getPositionIndex(this));
	});
}

function deSelectAll()
{
	$(".circle").removeClass("selected");
}

function testArrays()
{
	var arr = ["hello","world","xyz"];
	
	alert(tr3.attr("id"));
	
	alert(jQuery.inArray(tr3,posArray));
}

function getPositionIndex(aDiv)
{
	return jQuery.inArray($(aDiv).parent().attr("id"),posArray);
}






















