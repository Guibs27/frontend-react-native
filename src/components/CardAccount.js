import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useAccountStore } from '../stores/useAccountStore.js';

export default function CardAccount({ id, service, userName, imgUrl }) {
  const router = useRouter()

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Pressable onPress={() => router.push({ pathname: '/showPass', params: { id } })}>
          <Image
            style={styles.logo}
            source={imgUrl}
          />
        </Pressable>
        
        <View style={styles.content}>
          <Text style={styles.service}>{service}</Text>
          <Text style={styles.username}>{userName}</Text>
        </View>

        <View style={styles.buttons}>
          <Pressable style={styles.followUp} onPress={null}>
            <Feather name="arrow-right" size={28} style={{ opacity: 0.5 }}/>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    flex: 1
  },
  logo: {
    height: 80,
    width: 80
  },
  content: {
    gap: 8,
    flex: 1
  },
  service: {
    fontSize: 17
  },
  username: {
    color: '#9a9b9c'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4
  },
 followUp: ({ pressed }) => [
    {
      // backgroundColor: pressed ? '#c2c2c2' : '#f7f7f7',
      borderRadius: 50,
      // borderWidth: 1,
      // borderColor: '#e0e0e0',
      padding: 10,
      marginRight: 12
    }
  ]
})