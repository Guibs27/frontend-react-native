import { View, Text, StyleSheet } from 'react-native'
import CardAccount from './CardAccount'

export default function Content() {
    return (
        <View style={styles.content}>

            <Text>Olá! Eu sou o Guilherme, um entusiasta da tecnologia e apaixonado por resolver problemas criativos. Com uma sólida experiência em desenvolvimento de software, estou sempre em busca de novos desafios que me permitam combinar inovação com eficiência. Ao longo da minha trajetória, desenvolvi habilidades em diversas áreas, incluindo programação, design e gestão de projetos, o que me permite ter uma visão holística em cada projeto que realizo.
            <br /><br />
            Além da tecnologia, sou movido pela curiosidade e pelo desejo constante de aprender e crescer, tanto pessoal quanto profissionalmente. Quando não estou codificando ou explorando novas tecnologias, você pode me encontrar lendo, jogando ou desfrutando de uma boa música.
            <br /><br />
            Estou sempre aberto a novas oportunidades e colaborações. Vamos transformar ideias em realidade juntos!</Text>
            <br />

            <CardAccount
                service='Gmail'
                imgUrl='https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png'
                userName='gbizerradesouza@gmail.com'/>

            <CardAccount 
                service='Instagram'
                imgUrl='https://cdn-icons-png.flaticon.com/256/3621/3621435.png'
                userName='guibs01@gmail.com' />

            <CardAccount
                service='GitHub'
                imgUrl='https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg'
                userName='g.bizerra@aluno.ifsp.edu.br' />
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