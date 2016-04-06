#pragma strict

var animator : Animator;
var Player : Transform;
var Speed = 1;
//var FastSpeed = 20;
//var MaxDist = 10;
//var MinDist = 5;
var height : int;

function OnTriggerEnter(){
	animator.enabled = false;

}

function OnTriggerStay(){
		ChasePlayer();
}

function OnTriggerExit(){
	animator.enabled = true;

}

//Following script modified from http://answers.unity3d.com/questions/760751/monster-patrolling.html

function Start () 
{

}

function ChasePlayer() 
{
 transform.LookAt(Vector3(Player.position.x,height,Player.position.z));

 var Enemy = GameObject.FindWithTag("Enemy");
 var distance = Vector3.Distance(Enemy.transform.position, Player.transform.position);

 distance = Mathf.Abs(1-distance*.01);

 print(distance);
transform.position += (transform.forward * Speed * Time.deltaTime) * distance;



// if(Vector3.Distance(transform.position,Player.position) < MaxDist){
// 	yield WaitForSeconds (0.5);
//      transform.position += transform.forward * FastSpeed * Time.deltaTime;
//      print("I'm far");
//}
//
// if(Vector3.Distance(transform.position,Player.position) <= MinDist){
//      transform.position += transform.forward * SlowSpeed * Time.deltaTime;
//      print("I'm close");
//}


}