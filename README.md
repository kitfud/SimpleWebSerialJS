---
description: This project is work in progress!
---

# Introduction

## Connect an Arduino with your web application, in seconds.

![](.gitbook/assets/titelbild-v4.jpg)

## What is this library?

This library is an effort to drastically simplify working with the [Web Serial API](https://wicg.github.io/serial/). It handles tasks like setting up permissions, readers, writers and byte transformers, and offers web developers a familiar, event-driven style of listening to and sending data.

The idea is to make the Web Serial API available to as many developers as possible, especially ones who like to ideate and be creative, but don't necessarily have hardcore programming skills.

## Code Style Summary

This code gives you a very brief idea, how the library works on both Arduino and web page.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// Set up the serial connection
let connection = SimpleSerial.connect();

// React to incoming events
connection.on('event-from-arduino', function(data) {
    console.log('Received event "event-from-arduino" with parameter ' + data)
});

// Send named events to the Arduino with a number, string, array or json object
connection.send('event-to-arduino', "Hello there, Arduino");

// That's the basics!
```
{% endtab %}

{% tab title="Arduino" %}
```c
// Include the library
#include <SimpleWebSerial.h>

// Create an instance of the library
SimpleWebSerial WebSerial;

void setup() {
  // Initialize serial communication
  Serial.begin(57600);
  
  // Define events to listen to and their callback
  WebSerial.on("event-to-arduino", eventCallback); 
  
  // Send named events to browser with a number, string, array or json object
  WebSerial.send("event-from-arduino", 123);
}

void eventCallback(JSONVar data) {
    // Do something, even sending events right back!
    WebSerial.send("event-from-arduino", data);
});

void loop() {
  // Check for new serial data every loop
  WebSerial.check();
  delay(5);
}
```
{% endtab %}
{% endtabs %}

## Why this library?

The new [Web Serial API](https://wicg.github.io/serial/) is a great way to connect serial devices like the Arduino directly to your web application. It lets your website communicate with the real world, and opens up a lot of possibilities for web developers! However, working with it is cumbersome and very technical. You're left to deal with things like byte-arrays and parsing data. This library makes connecting your web application with an Arduino a breeze, and lets you get up and running in minutes.

{% hint style="info" %}
The Web Serial API is currently \(January 2021\) in a so-called origin trial. After the trial ends, it might get shipped with Chrome immediately, be briefly unavailable, or removed completely. There is no telling yet, so probably don't build your next start-up on it. For now, exploring possibilities is the main idea!

**UPDATE:** The feature will be shipped and enabled by default in Chrome 89!🥳
{% endhint %}

## Who is this for?

This library is for creative minds and developers who like to experiment and create prototypes, but do not necessarily care how something works on the technical level.

Do you know your way around web development? Basic concepts like HTML, JavaScript? Then you can use this without problems.

Do you like experimenting with new web technologies, maybe learn a new thing or two? This library will give you an idea what's possible when we integrate websites with the real world.

