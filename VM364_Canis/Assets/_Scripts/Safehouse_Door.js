 #pragma strict

static var myGlobals : GameObject;
static var Key_Collector : Key_Collector;
var doorFrame : GameObject;
var animator: Animator;
var win : boolean;


//Win Variables
static var curTime : float;
static var highScore : float = Mathf.Infinity;
var style : GUISkin;
static var oneTime : boolean;


function Awake() {
	myGlobals = GameObject.FindWithTag("System");
	Key_Collector = myGlobals.GetComponent("Key_Collector");
	Start();
}

function Start() {
	win = false;
	oneTime=false;

}

function Update() {
	stopWatch();
}

function OnTriggerEnter(){
	Key_Collector.foundSafeHouse = true;
}

function OnTriggerStay(col : Collider){
	if(col.gameObject.tag == "Player") {
		if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown( KeyCode.E ) ) {
			if (Key_Collector.haveKey == true) {		
					openDoor();
				} else {
					locked();
				}
			}
		}
}

function openDoor(){
	Debug.Log("Open Door");
	animator.SetBool("Open",true);
	win = true;
	if (!oneTime){
    	if (curTime < highScore){
			highScore = curTime;
			}
		oneTime=true;
		}
}

function locked(){
	Debug.Log("Door is Locked");
	animator.SetBool("Locked",true);
	//Play door locked animation
	//Play "shit its locked sound"
	//Activate mini-map
}

function stopWatch(){
	if (win != true) {
		curTime += 1*Time.deltaTime;
		curTime = Mathf.Round(curTime * 100f) / 100f;
		}
}

function OnGUI(){
	if(win == true){
		GUI.skin = style;
	    GUI.Label(Rect(0,Screen.height/2-30,Screen.width,Screen.height),"You Win!");
	    GUI.Label(Rect(0,Screen.height/2+10,Screen.width,Screen.height),"Your time was "+curTime);
	    GUI.Label(Rect(0,Screen.height/2+20,Screen.width,Screen.height),"High Score:  "+highScore);
	    if (GUI.Button(Rect(Screen.width/2-50,Screen.height/2+40,100,50),"Restart")){
   			UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
   			curTime = 0;
   			}
		}
}