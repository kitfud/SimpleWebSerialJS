# Arduino Usage

## Basics

{% hint style="info" %}
Super basic knowledge of Arduino programming is assumed.
{% endhint %}

Please make sure you've completed the [set-up for Arduino](../installation/arduino.md).

In your setup routine, initialize serial communications with your PC:

```c
void setup() {
    // 57600 is the default baud rate used in the library
    Serial.begin(57600);
}
```

### Listening to events

Define events you want to listen to in your code with the `on` method. `on`takes an event name as its first parameter and a function callback as its second.

To make sure the library knows when there is new serial data available, call the `check()` method at the beginning of each `loop()`.

Your code might now look like this:

```c
void setup() {
    Serial.begin(57600);
    
    WebSerial.on("browser-event", doSomething);
}

// This is our function callback.
// JSONVar is the type of parameter we expect and has to be specified as JSONVar.
void doSomething(JSONVar parameter) {
    // Do something with parameter
}

void loop() {
    // WebSerial needs to check if there is serial data
    WebSerial.check();
}
```

### Sending events to the browser

You can also send events to the browser, any valid JSON can be sent as parameter. This includes numbers, strings, arrays and objects:

#### Numbers and strings

```bash
WebSerial.send("event-with-string", "Hello there, browser");

WebSerial.send("event-with-number", 123);

WebSerial.send("event-with-array", [42, "Nice string"];

WebSerial.send("event-with-object", { r: 255, g: 255, b: 255 });
```

### Sending and Receiving Arrays and JSON

To send arrays or JSON objects, use the following syntax:

```c
// Arrays
JSONVar myArray;
myArray[0] = 1;
myArray[1] = "42";
// ...

// JSON
JSONVar myObject;
myObject["foo"] = "bar";
myObject["key2"] = true;
myObject["nested"]["key"] = "hot stuff";
```

{% hint style="info" %}
The serial protocol and arduino serial buffer are not made for high throughput. Every byte you add reduces the number of times you can receive an event per second. Try to keep your object keys short!
{% endhint %}



