function OnControllerColliderHit(hit : ControllerColliderHit)
{
	if(hit.gameObject.name=="Bullet(Clone)")
	{
		Debug.Log("Bullet Test2");
		Destroy(hit.gameObject);
		gameObject.transform.position = GameObject.Find("Administration").transform.position;
		gameObject.transform.rotation = GameObject.Find("Administration").transform.rotation;
	}
}