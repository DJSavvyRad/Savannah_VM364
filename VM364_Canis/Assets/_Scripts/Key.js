#pragma strict

//import UnityEngine.GUIStyle

static var myGlobals : GameObject;
static var keyCollector : Key_Collector;
static var distanceToKey : float = 25; // maximum distance that the raycast will detect

var keySound : AudioClip;

var keySprite : GameObject;
var keyVisible : boolean = false;

var safeHouseStatus : boolean;
var thisKey : GameObject;
var halo : Behaviour;

function Awake () {
	myGlobals = GameObject.FindWithTag("System");
	keyCollector = myGlobals.GetComponent("Key_Collector");
	halo.enabled = false; 
	}

function Update () {
	safeHouseStatus = keyCollector.foundSafeHouse;
	if (safeHouseStatus == true) {
		halo.enabled = true;
		} else {
		halo.enabled = false;
		}
	Pickup();
	keyGUI();
}

//function onMouseUp () {
//	Destroy(gameObject);
//	keyCollector.keyPiece += 1;
//}

function Pickup() {
if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown( KeyCode.E ) ) {
	var hit : RaycastHit;
	var rayPos : Ray = Camera.main.ScreenPointToRay( Vector3( Screen.width * 0.5, Screen.height * 0.5, 0 ) );
	if ( Physics.Raycast( rayPos, hit, distanceToKey ) ){
//			Debug.Log( "Ray hit : " + hit.collider.gameObject.name );
//			Debug.DrawLine( Camera.main.transform.position, hit.point, Color.red, 1.5 );
			if ( hit.collider.gameObject.name == thisKey.name  ) {
//				Debug.Log( "Ray hit key for sure" );
				GetComponent.<AudioSource>().PlayOneShot(keySound);
				keyCollector.keyPiece += 1;
				keySprite.SetActive(true);
				yield WaitForSeconds(.3);
				Destroy( hit.collider.gameObject );
//				hit.collider.gameObject.SetActive(false);
			}
		}
	}
}


function keyGUI(){
	var hit : RaycastHit;
	var rayPos : Ray = Camera.main.ScreenPointToRay( Vector3( Screen.width * 0.5, Screen.height * 0.5, 0 ) );

	if (Physics.Raycast( rayPos, hit, distanceToKey ) ){
		if ( hit.collider.gameObject.name == thisKey.name  ) {
				keyVisible = true;
			}
	} else {
		keyVisible = false;
		}
}

function OnGUI(){
	if(keyVisible == true){
//		GUI.Box(Rect(0,0,Screen.width/2,Screen.height/2),"Click To: Pickup Key");
		var centeredStyle = GUI.skin.GetStyle("Label");
	    centeredStyle.alignment = TextAnchor.UpperCenter;
	    GUI.Label(Rect(0,Screen.height-35,Screen.width,Screen.height),"Click to pickup key piece");
		}
}