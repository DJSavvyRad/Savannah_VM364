 #pragma strict
 
 var door : GameObject;
 var knob : GameObject;
 var smooth : float = 1.0;
 var open : boolean = false;
 
 
 
 function Start ()
 {
     door = GameObject.Find("door");
     knob = GameObject.Find("Sphere");
 }
  
 function Update () {
 //to rotate the door to the open angle//
        if (open)    // open = true
        {
               var doorOpen = Quaternion.Euler(0, 80, 0);    // Get the Euler of the angle that we want to reach
                var angle = Quaternion.Angle(transform.rotation, doorOpen);        // Convert it to angle
             door.transform.rotation = Quaternion.Slerp(transform.rotation, doorOpen, smooth * Time.deltaTime);
             
             // When we come near the angle, that we want to reach, we snap the door to that angle
             // cuz otherwise we will never reach it, because of the smoothed lerp of the Quaternion.
             // If the snap is too obvious try replacing the "smooth" with 0.5 for example.
             if (angle <= smooth)
                 door.transform.rotation = doorOpen;
        }
 
        //to rotate the door to the closed angle//
       else          //  open = false
        {
                doorOpen = Quaternion.Euler(0, 0, 0);
                angle = Quaternion.Angle(transform.rotation, doorOpen);
             door.transform.rotation = Quaternion.Slerp(transform.rotation, doorOpen, smooth * Time.deltaTime);
             
             if (angle <= smooth)
                 door.transform.rotation = doorOpen;
 
        }
  
     if (Input.GetMouseButtonDown(0))
     {
         var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
         var hit : RaycastHit;
         //raytrace on door knob//
          if (knob.GetComponent.<Collider>().Raycast (ray, hit, 10.0) && open) 
          {
             open = false;
         }
         else
         {
             open = true;
         }
     }
 }