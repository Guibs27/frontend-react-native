import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import CardAccount from './CardAccount'

export default function Content() {
  const [accounts, setAccounts] = useState([])
  const [txtService, setTxtService] = useState('')
  const [txtUsername, setTxtUsername] = useState('')
  const [txtPass, setTxtPass] = useState('')
  const [txtImgUrl, setTxtImgUrl] = useState('')

  useEffect(() => {
    const getAccounts = async () => {
      const response = await fetch('http://localhost:3000/account/list')
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setAccounts(data.accounts)
        return
      }
      console.log('Erro ao carregar accounts')
      return
    }

    getAccounts()
  }, [])

  const handleCreateAccount = async () => {
    const account = {
      "service": txtService,
      "username": txtUsername,
      "logo_image": txtImgUrl,
      "pass": txtPass,
      "user_id": 1
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
      console.log(data)
      setAccounts([data.account, ...accounts])
      return
    }
    console.log('Erro ao carregar accounts')
    return
  }



  return (
    <View style={styles.content}>

      <View>
        <Text>Serviço: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setTxtService}
          value={txtService}
          placeholder='Digite o nome do serviço'
          placeholderTextColor={'#bababa'}
        />
        <Text>Username: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setTxtUsername}
          value={txtUsername}
          placeholder='Digite seu nome de usuário'
          placeholderTextColor={'#bababa'}
        />
        <Text>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setTxtPass}
          value={txtPass}
          placeholder='Digite sua senha'
          placeholderTextColor={'#bababa'}
        />
        <Text>Logo url: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setTxtImgUrl}
          value={txtImgUrl}
          placeholder='Digite a URL da imagem'
          placeholderTextColor={'#bababa'}
          keyboardType='url'
        />
        <Pressable
          style={styles.button}
          onPress={handleCreateAccount}
        >

          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>

      <Text style={styles.intro}>
        Olá! Eu sou o Guilherme, um técnico em informática e
        estudante do Instituto Federal de São Paulo (IFSP). Com
        uma sólida experiência em desenvolvimento de software,
        estou sempre em busca de novos desafios que me permitam
        combinar inovação com eficiência. Ao longo da minha trajetória,
        desenvolvi habilidades em diversas áreas, incluindo programação,
        design e gestão de projetos, o que me permite ter uma visão
        holística em cada projeto que realizo.
        <br /><br />
        Além da tecnologia, sou movido pela curiosidade e pelo desejo
        constante de aprender e crescer, tanto pessoal quanto
        profissionalmente. Também tenho outros hobbies, como a ler,
        jogar e ouvir músicas de diversos gêneros.
        <br /><br />
        Estou sempre aberto a novas oportunidades e colaborações.
        Vamos transformar ideias em realidade juntos!
      </Text>
      <br />

      {accounts.length === 0 && <Text>Loading...</Text>}

      {
        accounts.map((account) =>
          <CardAccount
            id={account.id}
            key={account.id}
            service={account.service}
            imgUrl={account.logo_image}
            userName={account.username}
            accounts={accounts}
            setAccounts={setAccounts}
          />
        )
      }
    </View>

  )
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e3e3e3',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#a1a1a1'
  },
  button: ({ pressed }) => [{
    backgroundColor: pressed ? '#d97400' : '#f97f01',
    color: '#fff',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 6,
    borderRadius: 20
  }],
  buttonText: {
    color: '#fff'
  },
  intro: {
    backgroundColor: '#fafafa',
    padding: 8,
    borderRadius: 6,
    // borderWidth: 1,
    // borderColor: '#e0e0e0'
  }
})