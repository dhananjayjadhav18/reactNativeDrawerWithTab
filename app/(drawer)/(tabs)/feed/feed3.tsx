import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Feed3 = () => {
  return (
    <SafeAreaView className='flex-1 w-full h-full bg-red-400 justify-center items-center'>
      <View className='text-center w-full'>
        <Text className='text-center text-5xl w-full color-white'>Feed 3</Text>
      </View>
    </SafeAreaView>
  )
}

export default Feed3