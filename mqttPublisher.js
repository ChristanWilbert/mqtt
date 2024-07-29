const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");
client.on("connect", function () {
  setInterval(function () {
    var random1 = Math.random() * 60;
    random1 = Math.round(random1);
    console.log(random1);
    if (random1 < 30) {
      client.publish(
        "Christan",
        "Simple MQTT Message from a public broker: " + random1.toString() + "."
      );
    }
  }, 3000);
});
console.log("MQTT publisher Started");
