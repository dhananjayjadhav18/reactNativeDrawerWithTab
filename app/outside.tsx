import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Outside = () => {
  return (
    <SafeAreaView className='flex-1 w-full h-full justify-center items-center bg-indigo-600'>
      <View className='w-full'>
        <Text className='w-full text-4xl color-white text-center'>Outside</Text>
      </View>
    </SafeAreaView>
  )
}

export default Outside