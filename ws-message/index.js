const fs = require("fs");
const imageQr = require("qr-image");
const { Client, LocalAuth } = require("whatsapp-web.js");

const _data = require("./src/Data/Data.json");

const client = new Client({
  authStrategy: new LocalAuth(),
});

/**
 * @function client.on It will be executed only if the session is expired or there is no one open.
 * @var qrImage Create a Qr image in PNG, with the data offered by the library.
 * @process qrImage.pipe
 * Qr: The qr is created in the Qr folder.
 */

client.on("qr", (qr) => {
  try {
    MsgStatus({ statusLogin: "LogOut", MsgStatus: "" });
    const create_image_Qr = imageQr.image(qr, { type: "png" });
    create_image_Qr.pipe(fs.createWriteStream("./src/Qr/Qr.png"));
  } catch (error) {
    MsgStatus({ statusLogin: "Error login", MsgStatus: "" });
  }
});

/**
 * reading and obtaining the numbers from the json file and their respective messages, to then send to the corresponding numbers.
 */

function sendMsg() {
  _data.numbers.forEach((numbers) => {
    client.sendMessage(numbers[0] + "@c.us", numbers[1]);
    console.log("Mensaje enviado a " + numbers[0]);
  });
  MsgStatus({ statusLogin: "Successful", MsgStatus: "Successful" });
}

/**
 * @name MsgStatus
 * 
 * @param { string } statusLogin  Session status with WhatsApp.
 * @param { string } MsgStatus Status of the sent message, it can be: "successful" or "error message".
 * @const { object } Status Object in list with the information of the parameters, to change the data of "./Data/Status.JSON".
 */

function MsgStatus({ statusLogin, MsgStatus }) {
  const Status = {
    statusLogin: statusLogin,
    MessagesStatus: MsgStatus,
  };

  const dataTransferToArchive = JSON.stringify(Status);
  fs.writeFileSync(
    "./src/Data/Status.JSON",
    dataTransferToArchive,
    (err) => {}
  );
}

client.on("ready", () => {
  console.log("Client is ready!");
  // sending messages
  sendMsg();
});

client.initialize();
