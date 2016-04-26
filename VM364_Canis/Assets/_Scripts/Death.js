#pragma strict

//using UnityEngine.SceneManagement;

static var Player : GameObject;
static var Enemy : GameObject;

function Awake()  
{  
		Player = GameObject.FindWithTag("Player");
		Enemy = this.gameObject;
}  

function Update() {
	youLose();
}

function youLose () {
	var loseDist = Vector3.Distance(transform.position, Player.transform.position);
	if (loseDist <= 12) {
		UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
	}
}
