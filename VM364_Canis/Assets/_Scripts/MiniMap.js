#pragma strict

static var miniMap : Camera;
static var Player : GameObject;

function Awake () {
	Player = GameObject.FindWithTag("Player");
	miniMap = GameObject.Find("MiniMapCam").GetComponent.<Camera>();
}

function Start () {
//	miniMap.rect = new Rect(0,0,.2,.2);
}

function Update () {
	transform.position = Vector3(Player.transform.position.x, transform.position.y, Player.transform.position.z);
}