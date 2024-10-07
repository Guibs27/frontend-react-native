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
      <Stack.Screen name="signup" options={{ title: "Cadastre-se" }} />
      <Stack.Screen name="showPass" options={{ title: "Ver Senha" }} />
    </Stack>
  );
}