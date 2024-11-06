import { ScrollView, StyleSheet, View, Text, TextInput, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useLoginStore } from '../stores/useLoginStore'
import { storeObjectData } from '../utils/asyncStorage'
import Button from '../components/Button'
import { inputStyle } from '../components/InputText'

export default function Login() {
  const [txtEmail, setTxtEmail] = useState('')
  const [txtPass, setTxtPass] = useState('')
  const { login: loginStore } = useLoginStore()
  const router = useRouter()

  const handleLogin = async () => {
    const login = {
      email: txtEmail,
      pass: txtPass
    }

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      loginStore({ accessToken: data?.accessToken, ...data.user })
      await storeObjectData('userLogged', { accessToken: data?.accessToken, ...data.user })
      router.push('/home')
    } else {
      const data = await response.json()
      Alert.alert('Erro ao logar.')
      console.log(data?.error)
    }
    return
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Email:</Text>
        <TextInput
          style={inputStyle.input}
          onChangeText={setTxtEmail}
          value={txtEmail}
        />
        <Text style={{ marginTop: 10 }}>Senha:</Text>
        <TextInput
          style={inputStyle.input}
          onChangeText={setTxtPass}
          value={txtPass}
          secureTextEntry={true}
        />
        <Button onPress={handleLogin}>Entrar</Button>

        <View style={styles.divisor} />

        <Button onPress={() => router.push('/signup')}>Cadastre-se</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  divisor: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    width: '90%',
    marginVertical: 50,
  }
})