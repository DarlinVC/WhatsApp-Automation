English - 

<h1>WhatsApp Automation</h1>
This project aims to automate the sending of WhatsApp messages through the WhatsApp Web platform using Node.js.

<h3>Requirements</h3>
Node.js
a whatsapp account
<br>
<h3>Facility</h3>
1. Clone the repository or download the files.
2. Install the dependencies with the npm install command.
3. Make sure you are logged in to WhatsApp Web.
4. In the data.json file add the phone numbers and custom messages you want to send.
5. Run the script with the node index.js command.
<br>
<h3>Status.json</h3>
The status.json file contains information about the status of sending messages. If you are logged out, a QR code that changes every minute will be generated in the Qr folder. If the session started successfully, the status will be successful. If there was an error in the login, the status will be Error login.

In messagesStatus, if the message was sent successfully, the status will be successful. If it was not sent successfully, the status will be Error.

It is recommended to wait 30-45 seconds after successful appears in messagesStatus before closing the script, for security reasons.
<br>
<h3>Data.json</h3>
The data.json file contains a data object with a numbers variable that contains an array with an array list. Each array has a phone number and the custom message for that phone number. Be sure to edit this file before running the script.
<br>
<h3>Legal warning</h3>
Using this script may violate the WhatsApp Terms of Service. Use it at your own risk. The author is not responsible for the misuse or any consequence derived from the use of this script.

<br>
Español -

<h1>Automatización de WhatsApp</h1>
Este proyecto tiene como objetivo automatizar el envío de mensajes de WhatsApp a través de la plataforma Web de WhatsApp utilizando Node.js.

<h3>Requisitos</h3>
Nodo.js
a la cuenta de whatsapp
<br>
<h3>Instalación</h3>
1. Clone el repositorio o descargue los archivos.
2. Instale las dependencias con el comando npm install.
3. Asegúrese de haber iniciado sesión en WhatsApp Web.
4. En el archivo data.json, agregue los números de teléfono y los mensajes personalizados que desea enviar.
5. Ejecute el script con el comando node index.js.
<br>
<h3>Estado.json</h3>
El archivo status.json contiene información sobre el estado del envío de mensajes. Si está desconectado, se generará un código QR que cambia cada minuto en la carpeta QR. Si la sesión se inició correctamente, el estado será exitoso. Si hubo un error en el inicio de sesión, el estado será Error de inicio de sesión.

En el estado de los mensajes, si el mensaje se envió con éxito, el estado será exitoso. Si no se envió con éxito, el estado será Error.

Se recomienda esperar entre 30 y 45 segundos después de que aparezca "correcto" en los mensajes de estado antes de cerrar el script, por razones de seguridad.
<br>
<h3>Datos.json</h3>
El archivo data.json contiene un objeto de datos con una variable de números que contiene una matriz con una lista de matrices. Cada matriz tiene un número de teléfono y el mensaje personalizado para ese número de teléfono. Asegúrese de editar este archivo antes de ejecutar el script.
<br>
<h3>Aviso legal</h3>
El uso de este script puede violar los Términos de servicio de WhatsApp. Úselo bajo su propio riesgo. El autor no se responsabiliza por el mal uso o cualquier consecuencia derivada del uso de este script.
