 #pragma strict

static var myGlobals : GameObject;
static var Key_Collector : Key_Collector;
var doorFrame : GameObject;
var animator: Animator;

function Awake() {
	myGlobals = GameObject.FindWithTag("System");
	Key_Collector = myGlobals.GetComponent("Key_Collector");
}

function Update() {

}

function OnTriggerEnter(){
	Key_Collector.foundSafeHouse = true;
}

function OnTriggerStay(){
	if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown( KeyCode.E ) ) {
		if (Key_Collector.haveKey == true) {		
				openDoor();
			} else {
				locked();
			}
		}
}

function openDoor(){
	Debug.Log("Open Door");
	animator.SetBool("Open",true);
	//Play door open animation
}

function locked(){
	Debug.Log("Door is Locked");
	animator.SetBool("Locked",true);
	//Play door locked animation
	//Play "shit its locked sound"
	//Activate mini-map
}