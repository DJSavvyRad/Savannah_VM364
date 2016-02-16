#pragma strict

function OnGUI() {

	if (GUI.Button(Rect(Screen.width / 2,Screen.height / 2,60,30),"Start")){
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