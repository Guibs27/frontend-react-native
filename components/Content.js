import { View, Text, StyleSheet } from 'react-native'

export default function Content() {
    return (
        <View style={styles.content}>
            <Text>Content OK</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6df760',
      }
})