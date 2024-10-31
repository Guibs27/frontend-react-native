import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff"
        },
        headerStyle: {
          backgroundColor: '#1c1c1c'
        },
        headerTintColor: '#fff'
      }}>

      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Entrar" }} />
      <Stack.Screen name="signup" options={{ title: "Cadastre-se" }} />
      <Stack.Screen name="create-account" options={{ title: "Adicionar Conta" }} />
      <Stack.Screen name="show-pass" options={{ title: "Ver Senha" }} />
      <Stack.Screen name="update" options={{ title: "Editar" }} />
    </Stack>
  );
}