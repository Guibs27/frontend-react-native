import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useAccountStore } from '../stores/useAccountStore'
import Button from '../components/Button'

export default function ShowPass() {
  const router = useRouter()
  const { id } = useLocalSearchParams()
  const { accounts, deleteAccount } = useAccountStore()

  const account = accounts.find((item) => item.id === +id)

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
      deleteAccount(+id)
      router.back()
      return
    }
    console.log('Erro ao carregar accounts')
    return
  }

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={account?.logo_image}
        />

        <View style={styles.content}>
          <Text style={styles.service}>{account?.service}</Text>
          <Text style={styles.username}>{account?.username}</Text>
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.icons} onPress={() => router.push({ pathname: '/update', params: { id } })}>
            <Feather name="edit" size={24} />
          </Pressable>

          <Pressable style={styles.icons} onPress={handleDelete}>
            <Feather name="trash-2" size={24} />
          </Pressable>
        </View>
      </View>

      <View>
        <TextInput style={styles.input} value={account?.pass || ''} />
      </View>
      <Button>Copiar Senha</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flexDirection: 'row',
    gap: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80
  },
  content: {
    gap: 6,
    flex: 1
  },
  service: {
    fontSize: 17
  },
  username: {
    color: '#777777'
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e3e3e3',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: '#8a8a8a'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4
  },
  icons: ({ pressed }) => [
    {
      backgroundColor: pressed ? '#c2c2c2' : '#f7f7f7',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      padding: 10,
      marginRight: 10
    }
  ]
});
