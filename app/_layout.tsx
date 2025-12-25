import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "./global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView className='flex-1'>
      <Stack
        screenOptions={{ headerBackTitle: 'Back' }}
      >
        <Stack.Screen name="(drawer)" options={{ headerShown:false }} ></Stack.Screen>
        <Stack.Screen name="outside" options={{ title: 'Outside' }} ></Stack.Screen>
      </Stack>     
    </GestureHandlerRootView>
  );
}
