import { Pressable, StyleSheet, Text } from "react-native"

export default function Button({ onPress, children }) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: ({ pressed }) => [{
    backgroundColor: pressed ? '#d97400' : '#f97f01',
    color: '#fff',
    alignItems: 'center',
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 30,
    borderRadius: 20
  }],
  buttonText: {
    color: '#fff',
    fontSize: 15
  }
})