import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.copy}>Copyright © 2024 Guilherme Byz</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    padding: 25,
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#965f3c',
  },
  copy: {
    color: '#bababa'
  }
})