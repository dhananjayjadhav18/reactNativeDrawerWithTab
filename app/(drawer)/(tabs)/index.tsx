import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <SafeAreaView className='flex-1 w-full h-full bg-yellow-300 justify-center items-center'>
      <View className='w-full h-full justify-center items-center'>
        <Text className='w-full text-center'>Index</Text>
        <Link className='w-full text-center' href='/outside'>Outside Page</Link>
      </View>
    </SafeAreaView>
  )
}

export default Index