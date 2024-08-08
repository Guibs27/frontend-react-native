import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.body}>

      <Header />

      <Content />

      <Footer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff'
  }
})