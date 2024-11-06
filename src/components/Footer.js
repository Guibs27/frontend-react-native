import { View, Text, StyleSheet, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import { useLoginStore } from '../stores/useLoginStore'
import { deleteObjectData } from '../utils/asyncStorage'
import Button from './Button'

export default function Footer() {
  const { logout: logoutStore, accessToken } = useLoginStore()
  const router = useRouter()

  const handleLogout = async () => {
    const logout = {
      accessToken
    }

    const response = await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logout)
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      logoutStore()
      await deleteObjectData('userLogged')
      router.replace('/login')
    } else {
      const data = await response.json()
      Alert.alert('Erro ao logar')
      console.log(data?.error)
    }
    return
  }

  return (
    <View style={styles.footer}>
      <Text style={styles.copy}>Copyright © 2024 Guilherme Byz</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  copy: {
    color: '#bababa'
  }
})