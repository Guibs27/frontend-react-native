import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

export default function CardAccount({ id, service, userName, imgUrl, pass, accounts, setAccounts }) {
  const navigation = useNavigation()

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/account/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const newAccounts = accounts.filter((item) => item.id !== id)
      setAccounts(newAccounts)
      return
    }
    console.log('Erro ao carregar accounts')
    return
  }

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Pressable onPress={() => navigation.navigate('showPass', { imgUrl, pass, service, userName })}>
          <Image
            style={styles.logo}
            source={imgUrl}
          />
        </Pressable>
        <View style={styles.content}>
          <Text style={styles.service}>{service}</Text>
          <Text style={styles.username}>{userName}</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Pressable style={styles.icons} onPress={null}><Feather name="edit" size={24} /></Pressable>
        <Pressable style={styles.icons} onPress={handleDelete}><Feather name="trash-2" size={24} /></Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  logo: {
    height: 80,
    width: 80
  },
  content: {
    gap: 8
  },
  service: {
    fontSize: 17
  },
  username: {
    color: '#9a9b9c'
  },
  buttons: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  icons: ({ pressed }) => [{
    backgroundColor: pressed ? '#c2c2c2' : '#f7f7f7',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    marginRight: 10
  }]
})