import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';



function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={{backgroundColor: '#14161D'}}>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://thecryptodb.com/?u' }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
