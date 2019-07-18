/*
 * Entry point for the watch app
 */
import document from "document";
import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
let demotext = document.getElementById("demotext");
import * as messaging from "messaging";

let sendMessage = () => {};

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // Ready to send messages
  sendMessage('ready...');
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log("Connection error: " + err.code + " - " + err.message);
}


// if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
//   const hrm = new HeartRateSensor();
//   hrm.start();
// }


if (HeartRateSensor) {
  const hrm = new HeartRateSensor({ frequency: 1 });
  
  sendMessage = (data) => {
    if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
      // Send the data to peer as a message
      messaging.peerSocket.send(data);
    }
  };
  
  hrm.addEventListener("reading", () => {
    
    console.log(`Current heart rate: ${hrm.heartRate}`);
    
    demotext.text = hrm.heartRate;
    
    sendMessage(hrm.heartRate);
  });
  
  hrm.start();
}