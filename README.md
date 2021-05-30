---
description: >-
  SimpleWebSerial helps you to connect an Arduino with your web application, in
  seconds.
---

# Introduction

![](.gitbook/assets/titelbild-v4.jpg)

{% hint style="warning" %}
This library uses the Web Serial API, which is currently \(2021\) only available in Chrome 89+ and Edge 89+. If biggest possible browser support is important to your project, using this library may be the wrong approach.
{% endhint %}

## What is this library?

This library is an effort to drastically simplify working with the [Web Serial API](https://wicg.github.io/serial/). It handles repetitive setup steps and offers web developers a familiar, event-driven style of listening to and sending data.

The idea is to make using the Web Serial API as easy as possible, so as many developers as possible can use it, especially ones who like to ideate and be creative, but don't necessarily have hardcore programming skills.

## Code Style Summary

This library employs an event-driven code style. You can register event listeners with callback functions, and send events to the other device. Here's a brief idea how working with the library looks like in the browser and on the Arduino:

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

## Who is this for?

This library is for creative minds and developers who like to experiment and create prototypes, but do not necessarily care how something works on the technical level.

Do you know your way around web development? Basic concepts like HTML, JavaScript? Then you can use this without problems.

Do you like experimenting with new web technologies, maybe learn a new thing or two? This library will give you an idea what's possible when we integrate websites with the real world.

