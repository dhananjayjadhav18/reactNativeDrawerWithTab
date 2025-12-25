import { DrawerToggleButton } from '@react-navigation/drawer'
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
  return (
    <Tabs screenOptions={{
      headerLeft: () => <DrawerToggleButton/>,
      headerLeftContainerStyle: { paddingLeft:16, paddingBottom: 6 }
    }}>
      <Tabs.Screen name='index' options={{ title:'Home' }}/>
      <Tabs.Screen name='feed' options={{ title:'Feed', headerShown: false }}/>
      <Tabs.Screen name='profile' options={{ title:'Profile' }}/>
    </Tabs>
  )
}

export default Layout