var connected = 0; 
var msg = "o<=Name";
var cliname: String;
 
function Start(){
 Network.Connect("127.0.0.1",25000);
}
 
function OnGUI(){ 
 if(Network.peerType == Network.peerType.Disconnected){
  msg = "o<=Name";
  if(GUI.Button(new Rect(10,35,100,30),"Conect")){
   Network.Connect("127.0.0.1",25000);
   connected = 0; 
  }
 }
 
 if(Network.peerType != Network.peerType.Disconnected && connected == 0){
  msg = GUI.TextField(new Rect(10,10,300,20),msg); 
  if(GUI.Button(new Rect(10,35,100,30),"Login")){
   cliname=msg;  
   networkView.RPC ("EchoSV", RPCMode.Server, msg);
  connected = 1; 
  }
 } 

 if(Network.peerType != Network.peerType.Disconnected && connected == 1){
  msg = GUI.TextField(new Rect(10,10,300,20),msg); 
  if(GUI.Button(new Rect(10,35,100,30),"Off")){
   Network.Disconnect();
   msg = "o<=Name";
   connected = 0; 
  }
 }
} 

@RPC
function EchoCL(received : String){
  msg = received ;
}

@RPC
function EchoSV (receivedS : String, info : NetworkMessageInfo){
 var msgS= receivedS + "  connected!";
 networkView.RPC("EchoCL",info.sender,msgS);
}