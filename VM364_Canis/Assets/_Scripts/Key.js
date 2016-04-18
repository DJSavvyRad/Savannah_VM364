#pragma strict

static var myGlobals : GameObject;
static var keyCollector : Key_Collector;
static var distanceToKey : float = 25; // maximum distance that the raycast will detect

var keySprite : GameObject;

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
}

//function onMouseUp () {
//	Destroy(gameObject);
//	keyCollector.keyPiece += 1;
//}

function Pickup() {
if ( Input.GetMouseButtonDown(0) || Input.GetKeyDown( KeyCode.E ) ) {
	var hit : RaycastHit; var rayPos : Ray = Camera.main.ScreenPointToRay( Vector3( Screen.width * 0.5, Screen.height * 0.5, 0 ) );
	if ( Physics.Raycast( rayPos, hit, distanceToKey ) ){
//			Debug.Log( "Ray hit : " + hit.collider.gameObject.name );
//			Debug.DrawLine( Camera.main.transform.position, hit.point, Color.red, 1.5 );
			if ( hit.collider.gameObject.name == thisKey.name  ) {
//				Debug.Log( "Ray hit key for sure" );
				keyCollector.keyPiece += 1;
				keySprite.SetActive(true);
//				Destroy( hit.collider.gameObject );
				hit.collider.gameObject.SetActive(false);

			}
		}
	}
}