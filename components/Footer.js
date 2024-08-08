import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Footer OK</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5361f5',
      }
})