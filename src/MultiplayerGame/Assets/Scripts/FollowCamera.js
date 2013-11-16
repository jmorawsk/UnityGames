var target : Transform;
var distance = 5.0;
var height = 1.6;
var heightDamping = 2.0;
var rotationDamping = 3.0;
 
var ac: AvatarControl;

function LateUpdate () {
	if(!ac.Player) return;
	target = ac.Player.transform;
	
	if(!target) return;
	
	wantedRotationAngle = target.eulerAngles.y;
	wantedHeight = target.position.y + height + 0.5;
	currentRotationAngle = transform.eulerAngles.y;
	currentHeight = transform.position.y;

	currentRotationAngle = Mathf.LerpAngle (currentRotationAngle, wantedRotationAngle,rotationDamping * Time.deltaTime);

	currentHeight = Mathf.Lerp (currentHeight, wantedHeight, heightDamping * Time.deltaTime);
	currentRotation = Quaternion.Euler (0, currentRotationAngle, 0);
	
	transform.position = target.position;
	//transform.position -= currentRotation * Vector3.forward * distance;
	transform.position.y = currentHeight;
	//transform.LookAt (target);
	transform.LookAt(target.position + target.forward*distance);
	
}