import { View, StyleSheet, Text } from 'react-native'
import { useEffect } from 'react'
import { useAccountStore } from '../stores/useAccountStore'
import CardAccount from './CardAccount'

export default function Content() {
  const { accounts, setAccounts } = useAccountStore()

  console.log('Accounts: ', accounts)
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
      <Text style={styles.intro}>
        Olá! Meu nome é Guilherme, sou um técnico de informática e
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
        profissionalmente. Também tenho outros hobbies, como ler,
        jogar e ouvir músicas de diversas.
        <br /><br />
        Estou sempre aberto a novas oportunidades e colaborações.
        Vamos transformar ideias em realidade juntos!
        <br /><br />
        (Texto feito com o auxílio do ChatGPT)
      </Text>

      {accounts.length === 0 && <Text>Loading...</Text>}

      {
        accounts.map((account) =>
          <CardAccount
            key={account.id}
            id={account.id}
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
  },
  intro: {
    backgroundColor: '#fafafa',
    borderRadius: 6,
    padding: 8,
    paddingBottom: 16,
    paddingTop: 16,
    marginBottom: 5
  }
})