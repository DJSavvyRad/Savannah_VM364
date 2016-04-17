#pragma strict

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
		SceneManagement.SceneManager.LoadScene("01_Level");
	}
}
