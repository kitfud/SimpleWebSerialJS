---
description: Setting your Arduino up for Simple Web Serial.
---

# Arduino

## Installing the library

### Via Arduino IDE Library Manager

The easiest way to get the library is to install it from the Arduino library manager:

1. Open the Arduino IDE
2. Hit CTRL + Shift + I \(Shortcut for _Manage Libraries_\) 
3. Enter "Simple Web Serial" in the search field
4. _Simple Web Serial_ should be the first result. Click on it and hit the install button. That's it!

{% hint style="info" %}
This will also automatically install the Arduino\_JSON library, as it's a dependency.
{% endhint %}

### Manually

1. [Download the latest release](https://github.com/fmgrafikdesign/simplewebserial-arduino-library/releases) of the library.
2. Open the Arduino IDE.
3. Navigate to _Sketch --&gt; Include Library --&gt; Add .ZIP Library_.
4. Chose the .zip-Archive you downloaded in Step 1.

![](../.gitbook/assets/image.png)

If you need additional help installing the library, refer to the [official Arduino library installation guide](https://www.arduino.cc/en/guide/libraries).

## Including the library

After downloading the library, include it at the top of your sketch and create an instance of it:

```c
#include <SimpleWebSerial.h>;

// WebSerial can be any variable name you want.
SimpleWebSerial WebSerial;
```

And that's it! You are now ready to send events to your web application and listen to incoming events.

{% page-ref page="../usage/arduino.md" %}



