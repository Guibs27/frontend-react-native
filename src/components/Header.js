import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <Image
          style={styles.avatar}
          source="https://avatars.githubusercontent.com/u/145155960?s=400&u=5c9ece5fe9cabb80b24e29009a8daa627b41e76e&v=4"
        // source={require('caminho_arquivo')}
        />
        <Text style={styles.name}>Guilherme Byz</Text>
      </View>
      <Link href="signup">
        <Feather style={styles.menu} name="plus" size={28} color="white" />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: '#1c1c1c'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    fontWeight: 370
  },
  menu: {
    padding: 10,
    color: '#ffffff'
  }
})