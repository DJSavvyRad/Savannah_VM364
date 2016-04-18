#pragma strict
var points : Transform[] = new Transform[5];

// Patrol.js
//var points: Transform[];
var destPoint: int = 0;
static var agent: NavMeshAgent;
static var Player : GameObject;
var chase : boolean;
@Range(0,25)
var dist : float;

function Start() {
    agent = this.GetComponent.<NavMeshAgent>();
    Player = GameObject.FindWithTag("Player");
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
    agent.destination = points[destPoint].position;
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
        Debug.Log(this.gameObject.name + " Distance Remaining to point " + destPoint + ": " + agent.remainingDistance);
	} else {
		agent.destination = Player.transform.position;
	}
}