import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";


const App = () => {
  return (
    <SafeAreaProvider>
     
        <Stack>
        
       <Stack.Screen name="tabs" options={{ headerShown: false }} />
       <Stack.Screen name="Ongoing" options={{ headerShown: false }} />
       <Stack.Screen name="Assigned" options={{ headerShown: false }} />
       <Stack.Screen name="Explore" options={{ headerShown: false }} />
        
        </Stack>
  
    </SafeAreaProvider>
  );
};

export default App;
