import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Feed1 = () => {
  return (
    <SafeAreaView className='flex-1 w-full h-full bg-purple-500 justify-center items-center'>
      <View className='text-center w-full'>
        <Text className='text-center text-5xl w-full color-white'>Feed 1</Text>
      </View>
    </SafeAreaView>
  )
}

export default Feed1