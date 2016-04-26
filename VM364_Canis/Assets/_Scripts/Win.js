#pragma strict

static var curTime : float;
static var myGlobals : GameObject;
static var Safehouse_Door : Safehouse_Door;
static var win : boolean;
static var highScore : float = Mathf.Infinity;

var style : GUISkin;
static var oneTime : boolean;


function Awake() {
	myGlobals = GameObject.Find("Safehouse");
	Safehouse_Door = myGlobals.GetComponent("Safehouse_Door");
}

function OnTriggerStay() {
	win = Safehouse_Door.win;
	if (win == true) {
		if (!oneTime){
	    	if (curTime < highScore){
				highScore = curTime;
				}
			oneTime=true;
			}
		}
}

function Update() {
	stopWatch();
}

function stopWatch(){
	if (win == false) {
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