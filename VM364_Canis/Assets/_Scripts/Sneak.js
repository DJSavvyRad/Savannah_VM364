#pragma strict

var Player : GameObject;

var creatureRange : CapsuleCollider;
var csScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;  
var patrolScript : AutoPatrol;

var chase : boolean;

function Awake()  {  
		Player = GameObject.FindWithTag("Player");
		csScript = Player.GetComponent("FirstPersonController") as UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
		creatureRange = GetComponent.<CapsuleCollider>();

		patrolScript = GetComponent.<AutoPatrol>();

		chase = patrolScript.chase;
}  

function Update(){
	sneaky();
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