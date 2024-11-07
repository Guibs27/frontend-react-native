import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useState } from "react"
import { useRouter } from 'expo-router'
import { fetchAuth } from '../../utils/fetchAuth'
import { useAccountStore } from '../../stores/useAccountStore'
import { inputStyle } from '../../components/InputText'
import Button from '../../components/Button'

export default function CreateAccount() {
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
      pass: txtPass
    }

    const response = await fetchAuth('http://localhost:3000/account', {
      method: 'POST',
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
    <View style={styles.container}>
      <Text>Serviço:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtServico}
        value={txtServico}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Username:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtUsername}
        value={txtUsername}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Password:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtPass}
        value={txtPass}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Logo URL:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtImgUrl}
        value={txtImgUrl}
        keyboardType='url'
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Button onPress={handleCreateAccount}>Cadastrar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})