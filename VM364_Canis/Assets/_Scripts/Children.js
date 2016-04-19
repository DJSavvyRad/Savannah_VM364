#pragma strict
var pointGroup : GameObject;
var childsG : GameObject[] = new GameObject[pointGroup.transform.childCount];
var i : int = 0;

function Start(){

for(var child : Transform in pointGroup.transform){
	childsG[i] = child.gameObject;
	i++;
	}
}