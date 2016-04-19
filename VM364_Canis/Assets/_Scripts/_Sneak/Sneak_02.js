#pragma strict

static var Player : GameObject;
static var myGlobals : GameObject;

static var creatureRange : CapsuleCollider;
static var csScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;  
static var patrolScript : AutoPatrol_02;
static var chase : boolean;

function Awake()  {  
		Player = GameObject.FindWithTag("Player");
		csScript = Player.GetComponent("FirstPersonController") as UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
		creatureRange = GetComponent.<CapsuleCollider>();
		patrolScript = GetComponent("AutoPatrol_02");
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