---
description: 'Connect your arduino with your web application, in seconds.'
---

# Introduction

## Basic Overview

This code gives you a very short but concise idea, how the library works on both Arduino and web page.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// Set up your connection
let connection = new SimpleSerial({
    requestAccessOnPageLoad: true,
});

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

The new [Web Serial API](https://wicg.github.io/serial/) is a great way to connect serial devices like the Arduino directly to your web application. However, working with it is cumbersome and very technical. You're left to deal with things like byte-arrays and parsing data. This library makes connecting your web application with an Arduino a breeze, and lets you get up and running in minutes.

## Who is this for?

This library is for creative minds and developers who like to experiment and create prototypes, but do not necessarily care how something works on the technical level.

Do you know your way around web development? Basic concepts like HTML, JavaScript? Then you can use this without problems.

Do you like experimenting with new web technologies, maybe learn a new thing or two? This library will give you an idea, how 

Are you an intermediate web developer who builds advanced things, using frameworks? You'll love this.

Do you like the idea of broadening your horizon,

##  

```
$ give me super-powers
```

{% hint style="info" %}
 Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

{% code title="hello.sh" %}
```bash
# Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```
{% endcode %}



