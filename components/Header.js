import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Header OK</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fa5350'
    },

    title: {
        flexDirection: 'row',
        fontSize: 20,
        color: "black",
        padding: 10
      }
})