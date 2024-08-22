import { View, Text, StyleSheet } from 'react-native'
import CardAccount from './CardAccount'

export default function Content() {

    const accounts = [
        {
            id: 0,
            service: 'Gmail',
            imgUrl: 'https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png',
            userName: 'gbizerradesouza@gmail.com'
        },
        {
            id: 1,
            service: 'Instagram',
            imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/038/447/961/small/ai-generated-instagram-logo-free-png.png',
            userName: 'guibs01@gmail.com'
        },
        {
            id: 2,
            service: 'GitHub',
            imgUrl: 'https://www.svgrepo.com/show/447137/github-fill.svg',
            userName: 'g.bizerra@aluno.ifsp.edu.br'
        }

    ]

    return (
        <View style={styles.content}>

            <Text>Olá! Eu sou o Guilherme, um entusiasta da tecnologia e apaixonadopor resolver problemas criativos. Com uma sólida experiência em desenvolvimento de software, estou sempre em busca de novos desafios que me permitam combinar inovação com eficiência. Ao longo da minha trajetória, desenvolvi habilidades em diversas áreas, incluindo programação, design e gestão de projetos, o que me permite ter uma visão holística em cada projeto que realizo.
            <br /><br />
            Além da tecnologia, sou movido pela curiosidade e pelo desejo constante de aprender e crescer, tanto pessoal quanto profissionalmente. Quando não estou codificando ou explorando novas tecnologias, você pode me encontrar lendo, jogando ou desfrutando de uma boa música.
            <br /><br />
            Estou sempre aberto a novas oportunidades e colaborações. Vamos transformar ideias em realidade juntos!</Text>
            <br />

            {
                accounts.map( (account) => (
                    <CardAccount
                        key={account.id}
                        service={account.service}
                        imgUrl={account.imgUrl}
                        userName={account.userName}
                    />
                ))
            }

        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        padding: 15,
        gap: 10
        // flex: 8,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#ededed',
        // flexDirection: 'row'
      }
})