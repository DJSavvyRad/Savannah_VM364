#pragma strict


@Range (0, 100)
var Speed = 20;
@Range (0.0, 1.0)
var minSpeed = 0.3;
@Range (0.0, 1.0)
var maxSpeed = 1.0;

//All these static variables are automatically set to be what they needv
static var Player : GameObject;
static var Enemy : GameObject;
static var animator : Animator;
static var chase;
static var patrol : boolean;
static var height : int = 20;
static var ret : Vector3;
static var creatureRange : CapsuleCollider;
private var csScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;  

var patrolNavMesh : Behaviour;

function Awake()  
{  
		Player = GameObject.FindWithTag("Player");
		Enemy = this.gameObject;
		animator = Enemy.GetComponent(Animator);
		csScript = Player.GetComponent("FirstPersonController") as UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
		creatureRange = Enemy.GetComponent(CapsuleCollider);
		chase = false;
		patrol = true;
}  

function OnTriggerEnter(){
	if (patrolNavMesh.enabled == true){
		ret = lastPOS();
		}
	patrol = false;
}

function OnTriggerStay(){
	patrolNavMesh.enabled = false;
	chasePlayer();
}

function OnTriggerExit(){
	chase = false;
}

function Update() {
	returnPatrol();
	sneaky();
}

//Following script modified from http://answers.unity3d.com/questions/760751/monster-patrolling.html
function chasePlayer() {//Chases the player
	chase = true;
	transform.LookAt(Vector3(Player.transform.position.x,height,Player.transform.position.z));

	var distance = Vector3.Distance(Enemy.transform.position, Player.transform.position);

	distance = Mathf.Abs(1-distance*.01);
	distance = Mathf.Clamp(distance, .3,1); //makes minimum move speed 30% of max
	// print(distance);
	transform.position += (transform.forward * Speed * Time.deltaTime) * distance;
}

function lastPOS () : Vector3 { //Gets the last position of the Enemy
	var ret : Vector3 = Enemy.transform.position;
	return ret;
}

function returnPatrol() { //Sends monster back to where they were last patroling
	if (patrol == false && chase == false) {
		transform.LookAt(ret);
		transform.position += transform.forward * 20 * Time.deltaTime;
		var returnDist = Vector3.Distance(transform.position, ret);
		if (returnDist <= .3) {
			patrol = true;
			patrolNavMesh.enabled = true;
		}
	}
}

function sneaky() { //Shrinks collider if the character is not walking
	if (chase == false){
		if (csScript.m_IsWalking == true) {
			creatureRange.radius = 100;
			} else {
			creatureRange.radius = 65;
			}
	}
}


//function patrolThatShit() {
//	var pointB : Transform;
//	private var pointA : Vector3;
//	var speed = 1.0;
//	pointA = transform.position;
//	while (true) {
//	var i = Mathf.PingPong(Time.time * speed, 1);
//	transform.position=Vector3.Lerp(pointA,pointB.position,i);
//	yield;
//	}
//}