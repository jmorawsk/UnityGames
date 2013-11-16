var msg = "Click to Start";

function OnGUI(){
 msg = GUI.TextField(new Rect(10,10,300,20),msg);

 if(Network.peerType == Network.peerType.Disconnected){
  if(GUI.Button(new Rect(10,35,100,30),"Start")){
   Network.InitializeServer(10,25000,false);
  }
 }

 if(Network.peerType != Network.peerType.Disconnected){
  msg= "Server OK!";
  if(GUI.Button(new Rect(10,35,100,30),"Off")){
   Network.Disconnect();
   msg= "Click to   start";
  }
 }

}

@RPC
function EchoSV (receivedS : String, info : NetworkMessageInfo){
 var msgS= receivedS + "  connected!";
 networkView.RPC("EchoCL",info.sender,msgS);
}

@RPC
function EchoCL(received : String){
  msg = received ;
}