var velocity = 5.0;
var gravity = 0.0;
var jumpSpeed : float = 8.0;
var change; 
var range : float;
var deltaDirection : Vector3;
var controller : CharacterController;
function Start () {
   range = 2f;
   target = GetTarget();
   InvokeRepeating ("NewTarget",0.01f,2.0f);
   controller = gameObject.GetComponent(CharacterController);
}
function Update () {        
   if(change)
       target = GetTarget ();
 	
   if(Vector3.Distance(gameObject.transform.position,target)>range){
      controller.Move(target.normalized * Time.deltaTime);
      if (controller.isGrounded){
		//Player.transform.eulerAngles.y += Input.GetAxis("Horizontal");  
		//deltaDirection = Vector3(0, 0,Input.GetAxis("Vertical"));
		deltaDirection = gameObject.transform.position - target;
		deltaDirection = gameObject.transform.TransformDirection(deltaDirection);
		deltaDirection *= velocity;
	}
	if (false)//Input.GetButton ("Jump"))
	{
		Debug.Log("Jump");
		if(controller.isGrounded){ 
			deltaDirection.y= jumpSpeed;
 
		}
	} 
	deltaDirection.y -= gravity * Time.deltaTime;
	controller.Move(deltaDirection * Time.deltaTime);
      animation.CrossFade("RunForward");
   }else animation.CrossFade ("Idle");
}
function GetTarget(){
   return new Vector3(Random.Range (0,300),0,Random.Range (0,300));
}
function NewTarget(){
   var choice = Random.Range (0,3);
   switch(choice)
   {
      case 0: 
         change = true;
         break;
      case 1: 
         change = false;
         break;
      case 2:
         target = gameObject.transform.position;
         break;
   }
}
function Move()
{
/*
if (controller.isGrounded){
		//Player.transform.eulerAngles.y += Input.GetAxis("Horizontal");  
		//deltaDirection = Vector3(0, 0,Input.GetAxis("Vertical"));
		deltaDirection = Player.transform.TransformDirection(deltaDirection);
		deltaDirection *= velocity;
	}
	if (false)//Input.GetButton ("Jump"))
	{
		Debug.Log("Jump");
		if(controller.isGrounded){ 
			deltaDirection.y= jumpSpeed;
 
		}
	} 
	deltaDirection.y -= gravity * Time.deltaTime;
	controller.Move(deltaDirection * Time.deltaTime);
	*/
}