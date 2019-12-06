import consumer from "./consumer"

consumer.subscriptions.create("AppearanceChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {

    //=================== IF THE USER IS ONLINE ============================//////////////
    if (data['state'] === "online") {
      console.log(data['user_id']);
      var dot = document.getElementById("js-appearance" + data['user_id']);
      //var user_state = document.getElementById("user-state" + data['user_id']);
      var camera_icon = document.getElementById("js-camera-icon" + data['user_id']);
      if (dot != null && camera_icon != null) { // This values are null for the current_user
        dot.classList.remove("offline");
        dot.classList.add("online");
        camera_icon.classList.remove("offline");
        //camera_icon.classList.add("online");
      }
      console.log(dot);
    }
    
  }
});
