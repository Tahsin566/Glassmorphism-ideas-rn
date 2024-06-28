import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Details = ({navigation}) => {
  return (
    <View style={tw`flex-1 justify-center items-center gap-[10]`}>
      <Text style={tw`text-[8]`}>Details</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Favourite')}}>
        <Text>Go to favourite</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details