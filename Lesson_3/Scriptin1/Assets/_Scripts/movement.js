#pragma strict

var movement = true;

function Start () {

}
function Raise () { 
	transform.Translate(Vector3.up * Time.deltaTime, Space.World); 
    if(transform.position.y >= 6){
    movement = false; 
    }
}

function Lower () {
	transform.Translate(Vector3.down * Time.deltaTime, Space.World); 
	if(transform.position.y <= -4){
    movement = true; 
   }

}
//var move = true;  

function Update () {
		// Move the object upward in world space 1 unit/second.
//		if (transform.position.y < 6) {
//		transform.Translate(Vector3.up * Time.deltaTime, Space.World); 

	if (movement == true){
	Raise();
	}
	else{
	Lower();
	}
}