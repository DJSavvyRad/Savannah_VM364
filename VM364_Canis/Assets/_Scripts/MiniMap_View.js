#pragma strict

static var Player : GameObject;
var offsetMap : Vector3;

function Awake () {
	Player = GameObject.FindWithTag("Player");
}
function Update () {
	transform.position = Vector3(Player.transform.position.x, Player.transform.position.y, Player.transform.position.z) + offsetMap;
}