var velocity = 5.0;
var gravity = 20.0;
var jumpSpeed : float = 8.0;
var deltaDirection : Vector3;
var Player : GameObject;
var controller  : CharacterController;
var avatar0: Transform;
function Start () {

	//playerName = "HumanAI";  
	Player = gameObject;
	controller =  Player.GetComponent(CharacterController);
}

function Update () {
	if(!Player) return;
	if (controller.isGrounded){
		//Player.transform.eulerAngles.y += Input.GetAxis("Horizontal");  
		deltaDirection = Vector3(0, 0,Input.GetAxis("Vertical"));
		deltaDirection = Vector3.zero;
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
}