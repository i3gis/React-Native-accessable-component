To build this application of react native you can follows this step:

## Step 1: Install all package in package.json file

To install all package you can run this syntax:

```bash
# using npm
npm install
```

## Step 2: Intall pod ios

To install all depedency pod for ios you can follow this step:

```bash
cd ios
pod install
remove .xcode.env.local
cd ..
```

## Step 3: Add local.properties into folder android

The local.properties file is typically used in Android development projects. It's a file where you specify local settings such as the SDK location

```bash
example:
sdk.dir = /Users/{computername}/Library/Android/sdk

* replace {computername}
```

## Step 4: Build application into simulator

To build or running application you can run this syntax:

```bash
npm start
i // Press the i button on your keyboard to run iOS
a // Press the a button on your keyboard to run Android
```
