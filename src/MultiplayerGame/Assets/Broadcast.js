var log: Login;
var Tf1: String;
var Tf2: String;
 
function OnGUI ()
{
	if (Network.peerType != NetworkPeerType.Disconnected && log.connected == 1)
	{
		Tf1 = GUI.TextField (Rect(10, 70, 200, 20), Tf1);
		if (GUI.Button (Rect (10,95,100,20), "Chat")) 
		{
			networkView.RPC("BroadcastCL", RPCMode.Others,(log.cliname + ": " +Tf1));
		}
 	Tf2 = GUI.TextField(Rect (10, 120, 200, 20), Tf2);
 	}
}


@RPC
function BroadcastCL(received : String){
 Tf2 = received;
}