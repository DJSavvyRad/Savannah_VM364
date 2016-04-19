#pragma strict
var pointGroup : GameObject;
//@HideInInspector
public var points : GameObject[] = new GameObject[pointGroup.transform.childCount];
static var i : int = 0;

//var points : Transform[] = new Transform[5];

// Patrol.js
//var points: Transform[];
static var destPoint: int = 0;
static var agent: NavMeshAgent;
static var Player : GameObject;
var chase : boolean;
@Range(0,25)
var dist : float = 15;

function Start() {
    agent = this.GetComponent.<NavMeshAgent>();
    Player = GameObject.FindWithTag("Player");
    for(var child : Transform in pointGroup.transform){
		points[i] = child.gameObject;
		i++;
		}
    // Disabling auto-braking allows for continuous movement
    // between points (ie, the agent doesn't slow down as it
    // approaches a destination point).
    agent.autoBraking = false;
    chase = false;
    GotoNextPoint();
}

function OnTriggerStay(){
	chase = true;
}

function OnTriggerExit(){
	chase = false;
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
    chaseSpeed();
    if (chase == false) {
       if (agent.remainingDistance <= dist)
        GotoNextPoint();
//        Debug.Log(this.gameObject.name + " Distance Remaining to point " + destPoint + ": " + agent.remainingDistance);
	} else {
		agent.destination = Player.transform.position;
	}
}


function chaseSpeed(){
	var distance = Vector3.Distance(transform.position, Player.transform.position);
	distance = Mathf.Abs(1-distance*.01);
	distance = Mathf.Clamp(distance, .6,1); //makes minimum move speed 30% of max
	agent.speed = 30 * distance;
	Debug.Log(agent.speed);
}