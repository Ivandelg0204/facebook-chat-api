const login = require("./index.js");
const fs = require("fs");

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf8"));

login({ appState }, (err, api) => {

  if (err) return console.error(err);

  console.log("Messenger conectado");

  api.listenMqtt((err, message) => {

    if (err) return console.error(err);

    if (message.body) {

      console.log("Mensaje:", message.body);

      api.sendMessage(
        "Hola 👋 soy el asistente inmobiliario.",
        message.threadID
      );

    }

  });

});
