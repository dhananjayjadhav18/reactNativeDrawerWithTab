import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Feed = () => {
  return (
    <SafeAreaView className='flex-1 w-full h-full justify-center items-center bg-blue-500'>
      <View className='gap-y-7'>
        <Link href='/(drawer)/(tabs)/feed/feed1'>
          <Text className='text-4xl color-white'>FEED 1</Text>
        </Link>
        <Link href='/(drawer)/(tabs)/feed/feed2'>
          <Text className='text-4xl color-white'>FEED 2</Text>
        </Link>
        <Link href='/(drawer)/(tabs)/feed/feed3'>
          <Text className='text-4xl color-white'>FEED 3</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Feed