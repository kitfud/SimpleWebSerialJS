---
description: Setting your Arduino up for Simple Web Serial.
---

# Arduino

## Getting the library

The easiest way to get the library is to install it from the Arduino IDE Package manager.

```
$ give me super-powers
```

{% hint style="info" %}
 Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

## Including the library

After downloading the library, include it at the top of your sketch and create an instance of it:

```c
#include <SimpleWebSerial.h>;

// WebSerial can be any variable name you want.
SimpleWebSerial WebSerial;
```

And that's it! You are now ready to send events to your web application and listen to incoming events.

{% page-ref page="../usage/arduino.md" %}



