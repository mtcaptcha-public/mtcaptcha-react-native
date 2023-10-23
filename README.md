# MTCaptcha Sample ReactNative Project

This README provides step-by-step instructions to set up a MTCaptcha project.

## Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually included with Node.js)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Installation

1. **Install Node.js and npm:**
 you can install Node.js and npm with the following commands:

```sh
brew update
brew install node
```

   Verify that Node.js and npm are installed by running:
```sh
node -v
npm -v
```

2. **Install React Native CLI::**
Install the React Native CLI globally using npm:
```sh
npm install -g react-native-cli
```
Verify the installation by running:
```sh
react-native --version
```


3. **Install Project Dependencies:**

Install the project dependencies using `npm` or `yarn`:

- `npm install `

## Running on iOS

4. **Running the iOS App:**

To run the iOS app, you will need to navigate to the `ios` folder and install the CocoaPods dependencies.
 - `cd ios`
- `pod install`
- `cd ..`

## Now, you can start the development server:
`npx react-native start`

To run the iOS app, open a new terminal window, navigate to the project directory, and execute:

`npx react-native run-ios`

This will build and launch the iOS app in the simulator.

## Running on Android

5. **Running the Android App:**

To run the Android app, make sure you have the Android development environment set up. Follow the official React Native documentation for [Android setup](https://reactnative.dev/docs/environment-setup#installing-dependencies) if you haven't done so already.

Start an Android emulator or connect a physical device to your computer.

To run the Android app, open a terminal window, navigate to the project directory, and execute:

`npx react-native run-android`

This will build and launch the Android app on your emulator or device.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.


# Dependencies 
react-native-webview (https://github.com/react-native-community/react-native-webview)

# Properties

Name | Type | Description
--- | --- | ---
siteKey (required) | string | Site key associated with the site.  It can be fetched from admin portal.  For more info please visit https://www.mtcaptcha.com/dev-guide
domainName (required) | string | Fully qualified doamin name configured in MTCaptcha admin portal e.g https://www.mtcaptcha.com
lang| string | MTCaptcha supports more than 100 languages.  Please refer https://www.mtcaptcha.com/faq-custom-text-language
style| ViewStyle (refer [here](https://reactnative.dev/docs/view-style-props)) | Style for the webview
widgetSize | string | Supported values are `mini` and `standard`. Default is `standard`
theme | string | Find the different thme which can be set for captcha [here](https://service.mtcaptcha.com/mtcv1/demo/index.html?tab=2)
action | string | Tag for captcha alatytics.  e.g mobile Read more https://www.mtcaptcha.com/dev-guide-captcha-action
customLangText | JSON | All text and language can be customed.  Please read more https://www.mtcaptcha.com/dev-guide-custom-messages.  
customStyle | JSON | To set custom style for the cpatcha widget.  Please refer https://www.mtcaptcha.com/faq-custom-style
enableTestMode | string | This optimises captcha widget for automated testing please refer https://www.mtcaptcha.com/dev-guide-automated-testing 
onCaptchaVerified | function | This is a callback function when the captcha is verified
onCaptchaExpired | function | This is a callback function when the captcha is expired
onError | function | This is a callback function when the captcha results in error such as invalid site key, un recognized doamin






