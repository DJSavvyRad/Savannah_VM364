#pragma strict

var keyPiece : int = 0;
var haveKey : boolean = false;
var foundSafeHouse : boolean = false;

function Update() {
	if (keyPiece >= 3){
		haveKey = true;
		}
}