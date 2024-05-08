/* eslint-disable react-native/no-inline-styles */
import {Button} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewComponent = () => {
  const [url, setUrl] = useState(''); // State untuk menyimpan URL yang dimasukkan pengguna
  const webViewRef = useRef<WebView>(null);
  const [showWebview, setShowWebView] = useState(false);

  const reloadWebView = () => {
    setShowWebView(true);
    setTimeout(() => {
      if (webViewRef.current) {
        webViewRef.current.reload();
      }
    }, 1000);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 1,
          width: '100%',
        }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10,
            paddingHorizontal: 10,
            width: 270,
          }}
          placeholder="Enter URL"
          onChangeText={text => {
            setUrl(text);
            setShowWebView(false);
          }}
          value={url}
        />
        <Button onPress={reloadWebView}>Search</Button>
      </View>
      {!showWebview ? (
        <View style={{height: 500, flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              height: 500,
            }}>
            Input url first
          </Text>
        </View>
      ) : (
        <WebView ref={webViewRef} source={{uri: url}} style={{flex: 1}} />
      )}
    </View>
  );
};

export default WebViewComponent;
