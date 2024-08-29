import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardAccount from './CardAccount'

export default function Content() {
  const [accounts, setAccounts] = useState([])

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

  return (
    <View style={styles.content}>

      <Text>Olá! Eu sou o Guilherme, um entusiasta da tecnologia e apaixonadopor resolver problemas criativos. Com uma sólida experiência em desenvolvimento de software, estou sempre em busca de novos desafios que me permitam combinar inovação com eficiência. Ao longo da minha trajetória, desenvolvi habilidades em diversas áreas, incluindo programação, design e gestão de projetos, o que me permite ter uma visão holística em cada projeto que realizo.
        <br /><br />
        Além da tecnologia, sou movido pela curiosidade e pelo desejo constante de aprender e crescer, tanto pessoal quanto profissionalmente. Quando não estou codificando ou explorando novas tecnologias, você pode me encontrar lendo, jogando ou desfrutando de uma boa música.
        <br /><br />
        Estou sempre aberto a novas oportunidades e colaborações. Vamos transformar ideias em realidade juntos!</Text>
        <br />

      {accounts.length === 0 && <Text>Loading...</Text>}

      {
        accounts.map((account) =>
          <CardAccount
            key={account.id}
            service={account.service}
            imgUrl={account.logo_image}
            userName={account.username}
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
  }
})