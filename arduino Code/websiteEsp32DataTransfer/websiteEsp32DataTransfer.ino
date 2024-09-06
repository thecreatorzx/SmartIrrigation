#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "net";        // Replace with your Wi-Fi SSID
const char* password = "11111111"; // Replace with your Wi-Fi password

// Your server URL (where the website receives data)
String serverUrl = "http://";

// Example sensor values (you can replace these with real sensor data)
int humidity = 45;
int temperature = 26;
int soil moisture = 22;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  // Connect to Wi-Fi
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Prepare the URL and data
    String url = serverUrl + "?humidity=" + String(humidity) + "&temperature=" + String(temperature) + "&soilmoisture=" + String(soilmoisture);
    
    // Send HTTP GET request
    http.begin(url);
    int httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode); // For debugging
      Serial.println(response);         // For debugging
    } else {
      Serial.println("Error on sending GET request");
    }

    // Close connection
    http.end();
  } else {
    Serial.println("WiFi not connected");
  }

  delay(60000); // Send data every 60 seconds
}
