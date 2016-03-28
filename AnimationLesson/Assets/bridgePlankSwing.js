#pragma strict

var animator : Animator;

function Awake(){
	animator.enabled = false;
	}


function OnTriggerEnter(){
	animator.enabled = true;
}
