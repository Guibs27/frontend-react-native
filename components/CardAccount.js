import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export default function CardAccount() {
    return (
        <View style={styles.card}>
            <Image 
                style={styles.logo}
                source="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png"
            />
            <View style={styles.content}>
                <Text style={styles.service}>Gmail</Text>
                <Text style={styles.username}>gbizerradesouza@gmail.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#e3e3e3',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    logo: {
        height: 75,
        width: 75
    },
    content: {
        gap: 8
    },
    service: {
        fontSize: 17
    },
    username: {
        color: '#9a9b9c'
    }
})