import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Support = () => {
  return (
    <SafeAreaView className='flex-1 w-full h-full justify-center items-center'>
      <View className='w-full'>
        <Text className='w-full text-center text-4xl'>Support Page</Text>
      </View>
    </SafeAreaView>
  )
}

export default Support