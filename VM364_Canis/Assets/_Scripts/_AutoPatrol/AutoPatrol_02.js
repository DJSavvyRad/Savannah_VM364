#pragma strict

//Inspector Variables
@Space (15)
var pointGroup : GameObject;

	//Audio
	@Header ("Audio Clips")
	var creatureSFX_Find : AudioClip;
	var creatureSFX_Chase : AudioClip;
	var creatureSFX_Idle : AudioClip;
	var creatureSFX_GiveUp : AudioClip;

@Space (15)

@Range(0,10)
var offsetStart : int;
@Range(10,50)
var minSpeed : float;
@Range(10,50)
var defaultSpeed : float = 30;
@Range(0,5)
var chaseDelay : float;

//Script Variables
@HideInInspector
public var points : GameObject[];
static var Player : GameObject;

static var agent: NavMeshAgent;

@HideInInspector
public var arraySize : int;
static var patrolDist : float = 15;
static var destPoint: int = 0;
static var curTime : float;
static var fastChase : boolean;
static var chase : boolean;


function Awake(){
	var i : int = 0;

	arraySize = pointGroup.transform.childCount;

	points = new GameObject[arraySize];

	for(var child : Transform in pointGroup.transform){
		points[i] = child.gameObject;
		i++;
		}
	
	Start(); // Recall start function when scene restarts
}

function Start() {
    agent = this.GetComponent.<NavMeshAgent>();
    Player = GameObject.FindWithTag("Player");

    destPoint = offsetStart % points.Length;
    chase = false;
    fastChase = false;
    agent.speed = minSpeed;
    curTime = 0;
    GotoNextPoint();
}

function OnTriggerStay(){
	chase = true;
	//audio.PlayOneShot(creatureSFX_Find);
}

function OnTriggerExit(){
	chase = false;
	destPoint = returnPatrol();
	fastChase=false;

	curTime=0; //reset delay timer
	GotoNextPoint();
	//audio.PlayOneShot(creatureSFX_GiveUp);
}

function Update() {
    stopWatch(); //Only Runs stopwatch when chasing, but setup here to keep separate

    //audio.Play(creatureSFX_Idle);

    if (chase == false) {
		if (agent.remainingDistance <= patrolDist)
			GotoNextPoint();
	} else {
		//audio.PlayOneShot(creatureSFX_Chase);
		if (fastChase == false)
			agent.speed=minSpeed;

		speedUp();
		agent.destination = Player.transform.position;
	}
//	myDebugs();
}

function GotoNextPoint() {
	//Moves to the next control point in array, loops as necessary
	agent.speed = defaultSpeed;
    if (points.Length == 0)
        return;     

    agent.destination = points[destPoint].transform.position;
    destPoint = (destPoint + 1) % points.Length;
}

function returnPatrol():int {
	//Finds the closest Patrol Point, and returns it's index
	var r : int = 0;
	var closest : int; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 

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

function speedUp(){
	//When chasing, speed up the creature after a brief delay
	if (curTime > chaseDelay){
		fastChase = true;
		agent.speed = agent.speed+.5;
		}
}

function stopWatch(){
	//When chasing, record duration
	if (chase == true){
		curTime += 1*Time.deltaTime;
		}
}

function myDebugs(){
	Debug.Log(agent.speed); //print the current speed
//	Debug.Log("Time Since Load: " + Time.timeSinceLevelLoad);
//	Debug.Log("Cur time: " + curTime);
}

InvokeRepeating("myDebugs", 1, .5);
