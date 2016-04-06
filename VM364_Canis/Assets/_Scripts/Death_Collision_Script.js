// following script from http://answers.unity3d.com/questions/578798/make-the-game-stop-if-you-get-hit-by-enemy-object.html
var Health = 1;
 function OnControllerColliderHit(hit: ControllerColliderHit){
     if(hit.collider.tag=="Enemy"){ //check if that you bumped into an enemy
     Health=Health-1;      //decrease your health
     if(Health == 0) {       //if your health is 0 then stop game, exit what so ever
      //  Time.timeScale = 0; // this will freeze the game, stop
       // you can also use the following if you want the game to exit
       //Application.Quit();
       //or reload current level
       //Application.LoadLevel(Application.loadedLevel);
       SceneManagement.SceneManager.LoadScene("00_Terrain");
     }
   }
 }
 