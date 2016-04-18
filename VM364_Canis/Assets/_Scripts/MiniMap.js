#pragma strict

static var Player : GameObject;

function Awake () {
	Player = GameObject.FindWithTag("Player");
}

function Update () {
	transform.position = Vector3(Player.transform.position.x,400,Player.transform.position.z); 
}