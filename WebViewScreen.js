import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const BASE_URL = "https://fluxnet.com.ng/?view=app";

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: BASE_URL }} 
        style={styles.webview}
        onError={() => console.log('Failed to load!')}
        onLoadStart={() => console.log('Loading started')}
        onLoadEnd={() => console.log('Loading finished')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
