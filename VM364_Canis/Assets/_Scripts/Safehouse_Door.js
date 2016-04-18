 #pragma strict

static var myGlobals : GameObject;
static var Key_Collector : Key_Collector;

function Awake() {
	myGlobals = GameObject.FindWithTag("System");
	Key_Collector = myGlobals.GetComponent("Key_Collector");
}

function Update() {

}

function OnTriggerEnter(){
	Key_Collector.foundSafeHouse = true;
	if (Key_Collector.haveKey == true) {
		openDoor();
		} else {
		locked();
		}
}

function openDoor(){
	print("Open Door");
	//Play door open animation
}

function locked(){
	print("Door is Locked");
	//Play door locked animation
	//Play "shit its locked sound"
	//Activate mini-map
}