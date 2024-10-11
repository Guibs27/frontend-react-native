import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useAccountStore } from '../stores/useAccountStore'
import { useRouter } from 'expo-router'
import { useState } from "react"
import Button from '../components/Button'

export default function Signup() {
  const { addAccount } = useAccountStore()
  const router = useRouter()

  const [txtServico, setTxtServico] = useState('')
  const [txtUsername, setTxtUsername] = useState('')
  const [txtPass, setTxtPass] = useState('')
  const [txtImgUrl, setTxtImgUrl] = useState('')

  const handleCreateAccount = async () => {
    const account = {
      service: txtServico,
      username: txtUsername,
      logo_image: txtImgUrl,
      pass: txtPass,
      user_id: 1
    }

    const response = await fetch('http://localhost:3000/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })

    if (response.ok) {
      const data = await response.json()
      addAccount(data.account)
      router.back()
      return
    }

    console.log('Erro ao carregar accounts')
    return
  }

  return (
    <View style={styles.content}>
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
      <Button onPress={handleCreateAccount}>Cadastrar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 15
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e3e3e3',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 8,
    borderColor: '#8a8a8a'
  }
})