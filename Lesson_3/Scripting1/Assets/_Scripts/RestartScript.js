#pragma strict

var textArea = new Rect(0,Screen.height / 2 - 50,Screen.width,Screen.height);

function OnGUI() {

	var centeredStyle = GUI.skin.GetStyle("Label");
	centeredStyle.alignment = TextAnchor.UpperCenter;
	GUI.Label(textArea,"YOU FUCKING WIN", centeredStyle);
	if (GUI.Button(Rect(Screen.width / 2,Screen.height / 2,60,30),"Restart")){
	    BeginGame();
	}
}
// the function OnGUI is now depreciated
// we will use it only for the lessons today
// when we go over Unity's new GUI 
// please stop using it

function Start () {

}

function Update () {

}

function BeginGame(){
   Application.LoadLevel("01_PointShoot");
   // You can change "Level 1" to 1
}