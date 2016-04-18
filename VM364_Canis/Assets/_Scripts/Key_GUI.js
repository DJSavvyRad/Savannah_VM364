#pragma strict

var keyFound : boolean = false;
var keyTex : GameObject;

function Awake () {
	keyTex.SetActive(false);
}

function Update() {
	if (keyFound == true) {
		keyTex.SetActive(true);
	}
}