/*
var speed : float = 3.0;
var gravity : float = 20.0;
var rotateSpeed : float = 3.0;
var jumpSpeed : float = 8.0;
private var moveDirection : Vector3 = Vector3.zero;
 
function Update () {
var controller : CharacterController = GetComponent(CharacterController);
var forward : Vector3 = transform.TransformDirection(Vector3.left);
var curSpeed : float = speed * Input.GetAxis ("Vertical");

//transform.Rotate(0,0,Input.GetAxis ("Horizontal") * rotateSpeed);
 
//transform.Rotate(0,0,Input.GetAxis ("Unhorizontal") * -rotateSpeed);
 
controller.SimpleMove(forward * curSpeed);
 
if (Input.GetButton ("Jump")) 
if(controller.isGrounded){ 
moveDirection.y= jumpSpeed;
 
}
 
moveDirection.y -= gravity * Time.deltaTime;
 
controller.Move(moveDirection * Time.deltaTime);
}*/
/*
function Jump(playername : String){
 var Player = GameObject.Find(playername );
 Player.animation.CrossFade("RunIdle");
 Player.animation.wrapMode = WrapMode.Loop;
 //Player.rigidbody.velocity += Vector3.up;
 var controller : CharacterController = Player.GetComponent (CharacterController);
 controller.velocity += Vector3.up;
}*/