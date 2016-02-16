#pragma strict

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.name == "myCube(Clone)")
    {
        Destroy(col.gameObject);
    }
}