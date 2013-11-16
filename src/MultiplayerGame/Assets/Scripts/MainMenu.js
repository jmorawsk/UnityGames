#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	//if (GUI.Button (Rect (10,10,150,100), "I am a button")) {
	//	print ("You clicked the button!");
	//}
	//GUI.Box(Rect(0, 0, 400, 300), "");
	//GUI.Box(Rect(96, 20, 200, 200), "");
	//GUI.Box(Rect(96, 222, 200, 20), "TestMap");
    if (GUI.Button(Rect(0, 0, 180, 40),"Dynamic")){
        Application.LoadLevel(1);
    }
    /*
    if (GUI.Button(Rect(0, 50, 180, 40),"Client")){
        Application.LoadLevel(2);
    }
    if (GUI.Button(Rect(0, 100, 180, 40),"Server")){
        Application.LoadLevel(3);
    }
    */
    
}