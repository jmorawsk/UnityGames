var msg = "Without connection";

function Start(){
 Network.Connect("127.0.0.1",25000);
}
 
function OnGUI(){ 
 msg = GUI.TextField(new Rect(10,10,300,20),msg); 
 if(Network.peerType == Network.peerType.Disconnected){
  msg = "Without connection";
  if(GUI.Button(new Rect(10,35,100,30),"Connect")){
   Network.Connect("127.0.0.1",25000);
  }
 }
 
 if(Network.peerType != Network.peerType.Disconnected ){
  msg =  "Conected"; 
  if(GUI.Button(new Rect(10,35,100,30),"Off")){
   Network.Disconnect();
   msg = "Without connection";
  }
 } 
}