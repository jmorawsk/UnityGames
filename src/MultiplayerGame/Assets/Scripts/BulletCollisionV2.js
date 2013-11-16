function OnCollisionEnter(other : Collision)
{	
 
 	//Debug.Log(other.gameObject.name);
	//Debug.Log(other.gameObject.GetType);
	//Debug.Log(other.collider);
	if(!other.gameObject.name.StartsWith("Bullet"))
	{
		Destroy(gameObject);
		if(other.gameObject.name.StartsWith("Human"))
		{
		
			other.gameObject.transform.position = GameObject.Find("Administration").transform.position;
			other.gameObject.transform.rotation = GameObject.Find("Administration").transform.rotation;
		}
	}
}