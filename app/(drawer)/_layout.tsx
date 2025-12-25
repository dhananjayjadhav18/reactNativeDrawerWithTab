import Drawer from 'expo-router/drawer'
import React from 'react'

const DrawerMain = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Home', headerShown: false }}></Drawer.Screen>
      <Drawer.Screen
        name="support"
        options={{ title: 'Support', headerShown: true }}></Drawer.Screen>  
    </Drawer>
  )
}

export default DrawerMain