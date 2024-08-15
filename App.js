import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <ScrollView style={styles.body}>

      <Header />
      <Content />
      <Footer />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#fff'
  }
})