import * as messaging from "messaging";

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  console.log(evt.data);
  fetch(`http://localhost:4444/?hr           =${evt.data}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/javascript'}
    }).catch(error => console.error('Error: ' + error))
.then(res => console.log('Success: ' ));
  
  // fetch local server
  
  // fetch unity listener
}
