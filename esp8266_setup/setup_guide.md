Please follow the instructions below to setup esp8266 board provided

## SETUP

- Make sure the latest version of Arduino is installed
- If you are using the LoLin version, you might need to install some extra drivers from, instructions on how to do that here: https://www.drivereasy.com/knowledge/ch340g-driver-download-and-update-in-windows/
- Start Arduino and open Preferences window.

- Enter https://arduino.esp8266.com/stable/package_esp8266com_index.json into Additional Board Manager URLs field. You can add multiple URLs, separating them with commas.
- Open Boards Manager from Tools > Board menu and install esp8266 platform (and don't forget to select your ESP8266 board from Tools > Board menu after installation).
- Click Sketch > Include Library > Manage Libraries , then search for ArduinoJson and install the latest v5 (you need to specifically install version 5 otherwise the code provided won't work)
- You will also need to install the DHT sensor library from Adafruit - please install Version 1.2.3 (The later ones seem broken), You can find examples of how to use the DHT sensor from File > Examples look for DHT Sensor library and click on DHTtester sketch

