---
description: How to set up the JavaScript part of the SimpleWebSerial library.
---

# JavaScript

{% hint style="info" %}
The Web Serial API is currently \(2021\) only available in Chrome 89+ and Edge 89+. As of right now, no other browsers intend to implement the feature. If biggest possible browser support is important to your project, using the Web Serial API might be the wrong approach.
{% endhint %}

## Via &lt;script&gt; tag

This is the easiest method to get you started immediately. Just include the script tag inside the `<head>` of your document and you're good to go:

```
<script lang="text/javascript" src="https://unpkg.com/simple-web-serial@latest/dist/simple-serial.min.js">
```

That's it! Either [set-up the Arduino Library](arduino.md) as well, or take a look [how to use the JavaScript library](../usage/javascript.md).

## Via npm

```javascript
npm i simple-web-serial
```

And include it in your project either by using a script tag:

```bash
<script lang="text/javascript" src="../node_modules/simple-web-serial/dist/simple-serial.min.js">
```

or with a bundler like webpack:

```bash
import connect from "simple-serial";

const connection = connect()
```

