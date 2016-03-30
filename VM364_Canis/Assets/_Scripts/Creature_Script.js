var animator : Animator;

 function OnTriggerEnter(){
 animator.enabled = false;
 }
 function OnTriggerStay(){
	ChasePlayer();
 }
 function OnTriggerExit(){
 animator.enabled = true;
 }
//Following script from http://answers.unity3d.com/questions/760751/monster-patrolling.html

var Player : Transform;
 var MoveSpeed = 4;
 var MaxDist = 10;
 var MinDist = 5;
 
 
 
 
// function Start () 
// {
// 
// }
// 
 function ChasePlayer() 
 {
     transform.LookAt(Player);
     
     if(Vector3.Distance(transform.position,Player.position) >= MinDist){
     
          transform.position += transform.forward*MoveSpeed*Time.deltaTime;
 
           
           
          if(Vector3.Distance(transform.position,Player.position) <= MaxDist)
              {
                 //Here Call any function U want Like Shoot at here or something
    } 
    
    }
 }

