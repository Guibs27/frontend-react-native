import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.mainContent}>
          <Text style={{ fontSize: 30 }}>Login</Text>
          <Button onPress={() => router.push('/signup')}>Cadastre-se</Button>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 250
  },
  mainContent: {
    alignItems: 'center'
  },
});