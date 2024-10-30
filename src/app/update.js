import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useState } from "react"
import Button from '../components/Button'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { useAccountStore } from '../stores/useAccountStore'

export default function Update() {
  const { accounts, updateAccount } = useAccountStore()
  const router = useRouter()
  const { id } = useLocalSearchParams()

  const account = accounts.find((item) => item.id === +id)

  const [txtServico, setTxtServico] = useState(account?.service || '')
  const [txtUsername, setTxtUsername] = useState(account?.username || '')
  const [txtPass, setTxtPass] = useState(account?.pass || '')
  const [txtImgUrl, setTxtImgUrl] = useState(account?.logo_image || '')

  const handleCreateAccount = async () => {
    const account = {
      service: txtServico,
      username: txtUsername,
      logo_image: txtImgUrl,
      pass: txtPass,
      user_id: 1
    }

    const response = await fetch(`http://localhost:3000/account/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    if (response.ok) {
      const data = await response.json()
      updateAccount(data.account)
      router.back()
      return
    }

    console.log('Erro ao carregar accounts')
    return
  }

  return (
    <View style={styles.container}>
      <Text>Serviço:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtServico}
        value={txtServico}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtUsername}
        value={txtUsername}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtPass}
        value={txtPass}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Logo URL:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtImgUrl}
        value={txtImgUrl}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
        keyboardType='url'
      />
      <Button onPress={handleCreateAccount}>Atualizar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#444444',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 5
  }
})