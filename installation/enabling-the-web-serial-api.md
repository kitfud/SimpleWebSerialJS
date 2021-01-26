# Enabling the Web Serial API

The Web Serial API is currently only available in Google Chrome and other chromium based browsers \(Edge, Opera\). This might change in the future, but for now using Google Chrome is the most reliable way to test your applications.

As the Web Serial API is underoing origin trial until April 2021, you either need to enable a chrome flag to use the API, or get a token for the origin trial. Enabling the flag is done in 10 seconds and good if you just want to test things out for yourself. However, if you want other users to use your application online, you're better off registering for the origin trial. Else, every one of your users has to enable the flag as well. 

### Testing for yourself? Enable the flag:

1. Navigate to `chrome://flags/#enable-experimental-web-platform-features` in your browser's adress bar.
2. Change the highlighted `Experimental Web Platform features` flag to `enabled` and restart your browser.

### Building for other users? Get a token:

1. Navigate to the [register page for the origin trial](https://developer.chrome.com/origintrials/#/view_trial/2992641952387694593)
2. Hit the register button and fill out the necessary information
3. Hit register again to receive your token.
4. Add the token to the `<head>` of your html files like so:`<meta http-equiv="origin-trial" content="YOUR_TOKEN">`

{% hint style="warning" %}
Your token will expire after a set amount of time \(about a month\). [Provide feedback on the origin trial page](https://developer.chrome.com/origintrials/#/trials/my) to renew your token, if necessary.
{% endhint %}

{% hint style="info" %}
After the trial ends, the Web Serial API might get shipped with Chrome as a regular feature, or scrapped completely. There is no telling yet, so probably don't build your enterprise on it. For now, exploring possibilities is the main idea!
{% endhint %}

