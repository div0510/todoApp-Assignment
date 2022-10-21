import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const MYAPP = 'http://192.168.29.201:3000';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:'100%' , height: '100%'}}>
        <WebView
          source={{uri: MYAPP}}
          onLoad={console.log('Loaded!!')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
