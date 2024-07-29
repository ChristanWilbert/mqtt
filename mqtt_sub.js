const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://0.0.0.0:1883");
client.on("connect", function () {
  client.subscribe("Christan");
});
client.on("message", function (topic, message) {
  console.log(message.toString());
});
