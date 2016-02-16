 #pragma strict
 var prefab : GameObject;
 var distance = 10.0;
 
 function Update () {
     if (Input.GetMouseButtonDown(0)) {
     
         var position = Vector3(Input.mousePosition.x, Input.mousePosition.y, distance);
         position = Camera.main.ScreenToWorldPoint(position);
         var go = Instantiate(prefab, Vector3(0,1,-10), Quaternion.identity) as GameObject;
         go.transform.LookAt(position);    
         Debug.Log(position);    
         go.GetComponent(Rigidbody).AddForce(go.transform.forward * 1000);
     }
 }