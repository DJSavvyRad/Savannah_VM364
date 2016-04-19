#pragma strict
var pointGroup : GameObject;
var arraySize : int;
//@HideInInspector
public var points : GameObject[];
//static var i : int = 0;
@Range(0,10)
var offsetStart : int;

static var destPoint: int = 0;
static var agent: NavMeshAgent;
static var Player : GameObject;
var chase : boolean;
@Range(0,25)
var dist : float = 15;

function Awake() {
	var i : int = 0;
//	@HideInInspector
	arraySize = pointGroup.transform.childCount;
	points = new GameObject[arraySize]; // pointGroup.transform.childCount
	for(var child : Transform in pointGroup.transform){
		points[i] = child.gameObject;
		i++;
		}
	Start();
}

function Start() {
    agent = this.GetComponent.<NavMeshAgent>();
    Player = GameObject.FindWithTag("Player");
    destPoint = destPoint + offsetStart;
    agent.autoBraking = false;
    chase = false;
    GotoNextPoint();
}

function OnTriggerStay(){
	chase = true;
}

function OnTriggerExit(){
	chase = false;
	destPoint = returnPatrol();
	GotoNextPoint();
}

function GotoNextPoint() {
    // Returns if no points have been set up
    if (points.Length == 0)
        return;
        
    // Set the agent to go to the currently selected destination.
    agent.destination = points[destPoint].transform.position;
//    Debug.Log("I am - " + this.gameObject.name + " Moving to point: " + destPoint);
    // Choose the next point in the array as the destination,
    // cycling to the start if necessary.
    destPoint = (destPoint + 1) % points.Length;
}


function Update() {
    // Choose the next destination point when the agent gets
    // close to the current one.
    if (chase == false) {
       if (agent.remainingDistance <= dist)
        GotoNextPoint();
//        Debug.Log(this.gameObject.name + " Distance Remaining to point " + destPoint + ": " + agent.remainingDistance);
	} else {
		agent.destination = Player.transform.position;
	}
}

function returnPatrol():int {
// Find all game objects with tag Enemy
		var r : int = 0;
		var closest : int; 
		var distance = Mathf.Infinity; 
		var position = transform.position; 
		// Iterate through them and find the closest one
		for (var go : GameObject in points)  { 
			var diff = (go.transform.position - position);
			var curDistance = diff.sqrMagnitude; 
			if (curDistance < distance) { 
				closest = r; 
				distance = curDistance; 
				r++;
			} 
		} 
		return closest;	
}