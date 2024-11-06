import { View, StyleSheet, Text, TextInput, Alert } from 'react-native'
import { useState } from "react"
import { useRouter } from 'expo-router'
import Button from '../components/Button'
import { inputStyle } from '../components/InputText'

export default function SignUp() {
  const router = useRouter()

  const [txtName, setTxtName] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtAvatar, setTxtAvatar] = useState('')
  const [txtPass, setTxtPass] = useState('')

  const handleCreateAccount = async () => {
    const user = {
      name: txtName,
      email: txtEmail,
      avatar: txtAvatar,
      pass: txtPass,
    }

    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    if (response.ok) {
      const data = await response.json()
      Alert.alert('Usuário Criado com Sucesso!')
      setTxtName('')
      setTxtEmail('')
      setTxtAvatar('')
      setTxtPass('')
      router.back()
    } else {
      const data = await response.json()
      Alert.alert('Erro ao Criar Usuário')
      console.log(data?.error)
    }
    return
  }

  return (
    <View style={styles.content}>
      <Text>Nome:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtName}
        value={txtName}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Email:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtEmail}
        value={txtEmail}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Avatar URL:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtAvatar}
        value={txtAvatar}
        keyboardType='url'
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Text>Senha:</Text>
      <TextInput
        style={inputStyle.input}
        onChangeText={setTxtPass}
        value={txtPass}
        secureTextEntry={true}
        placeholder='...'
        placeholderTextColor='#b8b8b8'
      />
      <Button onPress={handleCreateAccount}>Cadastrar</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 15
  }
})