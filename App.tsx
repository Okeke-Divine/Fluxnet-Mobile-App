import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const BASE_URL = "https://fluxnet.com.ng/?view=app";

const App = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: BASE_URL }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
