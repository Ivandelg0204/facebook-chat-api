const login = require("./index.js");

login(
  { email: "ivandelg024@gmail.com", password: "3144267821IvanDelgado" },
  (err, api) => {
    if (err) return console.error(err);

    console.log("Messenger conectado");

    api.listenMqtt((err, message) => {

      if (err) return console.error(err);

      if (message.body) {

        console.log("Mensaje:", message.body);

        api.sendMessage(
          "Hola, soy Marco si esta disponible.",
          message.threadID
        );

      }

    });
  }
);
