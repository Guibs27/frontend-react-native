import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff"
        },
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff'
      }}>

      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ title: "Cadastre-se" }} />
      <Stack.Screen name="showPass" options={{ title: "Ver Senha" }} />
    </Stack>
  );
}