#pragma strict

var clickCounter: int; //This is the variable we are using to store the number of clicks
 
 
function OnGUI () {
    //Sets up a button in the middle of the screen
    //with the size 100 x 30 pixels
    //that says "Click me" and displays the number of clicks made
    if (GUI.Button(Rect(Screen.width / 2, Screen.height / 2, 100, 30), "Click me:" + clickCounter)) {
   
        //counts up the clickCounter by each click
        clickCounter ++;
    }
}