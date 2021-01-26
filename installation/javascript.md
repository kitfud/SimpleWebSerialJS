---
description: How to set up the JavaScript part of the SimpleWebSerial library.
---

# JavaScript

## Via &lt;script&gt; tag

This is the easiest method to get you started immediately. Just include the script tag inside the `<head>` of your document and you're good to go:

```
<script lang="text/javascript" src="https://unpkg.com/simple-web-serial@0.0.1/lib/SimpleSerial.js">
```

That's it! Either [set-up the Arduino Library](arduino.md) as well, or take a look [how to use the JavaScript library](../usage/javascript.md).

## Via npm

```javascript
npm i simple-web-serial
```

And include it in your project like so: 

```bash
<script lang="text/javascript" src="../node_modules/simple-web-serial/lib/SimpleSerial.js">
```

{% hint style="info" %}
Module bundling will be supported with a later build.
{% endhint %}

