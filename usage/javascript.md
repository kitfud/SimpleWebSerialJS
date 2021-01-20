# JavaScript Usage

## Basics

{% hint style="info" %}
Basic knowledge of HTML and JavaScript is assumed.
{% endhint %}

To use the library, first create a new instance of it:

```javascript
const connection = new SimpleWebSerial();
```

### Listening to events

Define events you want to listen to with the `on` method. `on`takes an event name as its first parameter and a callback as its second:

```bash
connection.on('event-from-arduino', function(data) {
    console.log('Received event "event-from-arduino" with parameter ' + data)
});
```

### Sending events

You can also send events to the Arduino, any valid JSON can be sent as parameter. This includes numbers, strings, arrays and objects:

```bash
connection.send('event-with-string', "Hello there, Arduino");

connection.send('event-with-number', 123);

connection.send('event-with-array', [42, "Nice string"];

connection.send('event-with-object', { r: 255, g: 255, b: 255 });
```

That's the basics! There are a few more concepts, like waiting for the serial write to finish, customising the set-up routine and removing listeners, but this is enough to build your first applications.

## Methods

### new SimpleWebSerial\(null \| number baudRate \| object constructorObject\)

When creating a new SimpleWebSerial instance, it has a default set-up that works out of the box. However, you can adjust this to your needs.

TODO

### .on\(string eventName, function callback\)

TODO

### .send\(eventName, JSON parameter\);

TODO

### .sendEvent\(string eventName\);

TODO

### .sendData\(JSON data\);

TODO

### .removeListener\(\[string eventName, function callback\]\)

TODO

### .removeListeners\(string eventName\);

TODO

### .requestSerialAccessOnClick\(string elementID \| HTMLElement element\)

TODO

## Advanced

### Asynchronous function calls

Writing to the serial port is not synchronous, or _asynchronous_. This means, your code will continue running while trying to write data to the serial port in the background.

```javascript
function sendEvent()  {
    connection.send('someEvent', "arbitrary data");
    console.log("I might be called before the event has been written");
}
```

To prevent this, you can make use `async` /`await` . This will make the execution of your code stop until the event has been successfully written. Mark your function as `async` and tell it to `await` the completion of the event before continuing:

```javascript
async function sendEvent() {
    await connection.send('someEvent', "arbitrary data");
    console.log("I definitely won't be called until the event has been written");
}
```

That's it! For more information on async / await, why it's very handy, or what to use as an alternative, you can refer to [this tutorial](https://javascript.info/async-await).

