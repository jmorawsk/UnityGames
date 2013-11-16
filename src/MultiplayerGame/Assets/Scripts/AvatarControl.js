var velocity = 5.0;
var gravity = 20.0;
var jumpSpeed : float = 8.0;
var deltaDirection : Vector3;
var Player : GameObject;
var controller  : CharacterController;
var playerClone: String;
var avatar0: Transform;
var showHUD : boolean;
var showMenu : boolean;
var target : GameObject;
  
enum Axes {MouseXandY, MouseX, MouseY}
    var Axis : Axes = Axes.MouseXandY;
 
    var sensitivityX = 15.0;
    var sensitivityY = 15.0;
 
    var minimumX = -360.0;
    var maximumX = 360.0;
 
    var minimumY = -60.0;
    var maximumY = 60.0;
 
    var rotationX = 0.0;
    var rotationY = 0.0;
 
    var lookSpeed = 2.0;
  
function OnLoaded()
{ 
	Network.Instantiate(avatar0, transform.position, transform.rotation, 0);
	playerClone = "Human(Clone)";  
	Player = GameObject.Find(playerClone);
	controller =  Player.GetComponent(CharacterController);
}

function Update()
{
	if(!Player) return;
	rotationX += Input.GetAxis("Mouse X") * sensitivityX;
	rotationY += Input.GetAxis("Mouse Y") * sensitivityY;
	Debug.Log(Input.GetAxis("Mouse Y"));
	Player.transform.localRotation = Quaternion.AngleAxis (rotationX, Vector3.up);
	//Player.transform.localRotation *= Quaternion.AngleAxis (rotationY, Vector3.left);
	if (controller.isGrounded){
		//Player.transform.eulerAngles.y += Input.GetAxis("Horizontal");
		//deltaDirection = Vector3(0, Input.GetAxis("Horizontal"), 0);
		deltaDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		deltaDirection = Player.transform.TransformDirection(deltaDirection);
		deltaDirection *= velocity;
	}
	if (Input.GetButton ("Jump"))
	{
		Debug.Log("Jump");
		if(controller.isGrounded){ 
			deltaDirection.y= jumpSpeed;
 
		}
	} 
	deltaDirection.y -= gravity * Time.deltaTime;
	controller.Move(deltaDirection * Time.deltaTime);
	
	 
	

	//Control  of the animations "WalkForward" e "Idle" using RPC
	if(Network.peerType != NetworkPeerType.Disconnected)//networkView)
	{
		var entID = Player.networkView.viewID.ToString().Remove(0,13);
		if(Input.GetAxis("Vertical")!= 0)
		{
			if(Input.GetAxis("Vertical") > 0)
			{
				networkView.RPC("Walk",RPCMode.All,Player.name);
			}
			else
			{
				networkView.RPC("WalkBackward",RPCMode.All,Player.name);
			}
		}
		else
		{  
			networkView.RPC("Idle", RPCMode.All, Player.name);
		}
		//Control  of the  animation "ShootStraight" using  RPC
		if(Input.GetButton("Fire1"))
		{
			//velocity=0;
			networkView.RPC("Shoot", RPCMode.All, Player.name);
		}
		//Control  of the shoot using  RPC
		if(Input.GetButtonDown("Fire1")){//.GetKeyDown("Fire1")){
			networkView.RPC("ShootB", RPCMode.All,entID,0); //the last parameter is the value of  "OneTime" in the RPC 
		}
		
		if(Input.GetButtonDown("Jump")){
			networkView.RPC("Jump", RPCMode.All,Player.name); //the last parameter is the value of  "OneTime" in the RPC 
		}
	}

}

function OnPlayerDisconnected (player : NetworkPlayer){
	Network.RemoveRPCs(player, 0);
	Network.DestroyPlayerObjects(player);
}

function Adjust360andClamp ()
{
//      This prevents your rotation angle from going beyond 360 degrees and also 
//      clamps the angle to the min and max values set in the Inspector.
 
	// During in-editor play, the Inspector won't show your angle properly due to 
	// dealing with floating points. Uncomment this Debug line to see the angle in the console.
 
	// Debug.Log (rotationX);
 
	// Don't let our X go beyond 360 degrees + or -
	if (rotationX < -360)
	{
		rotationX += 360;
	}
	else if (rotationX > 360)
	{
		rotationX -= 360;
	}   
 
	// Don't let our Y go beyond 360 degrees + or -
	if (rotationY < -360)
	{
		rotationY += 360;
	}
	else if (rotationY > 360)
	{
		rotationY -= 360;
	}
 
	// Clamp our angles to the min and max set in the Inspector
	rotationX = Mathf.Clamp (rotationX, minimumX, maximumX);
	rotationY = Mathf.Clamp (rotationY, minimumY, maximumY);
}