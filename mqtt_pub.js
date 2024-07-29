const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://0.0.0.0:1883");
client.on("connect", function () {
  setInterval(function () {
    let count = 0;
    var string = "";
    while (count < 16) {
      var random1 = Math.round(Math.random() * 25 + 97);
      string += String.fromCharCode(random1);
      count++;
    }
    console.log("Random Text Generated: " + string);

    client.publish(
      "Christan",
      "Simple MQTT Message from a local broker: " + string + "."
    );
  }, 2000);
});
console.log("MQTT publisher Started");
