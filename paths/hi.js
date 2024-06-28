
import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'


const Hi = ({navigation}) => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
        <Text style={[tw`text-[10]`,{}]}>Hi</Text>
    <TouchableOpacity onPress={()=>{}}>

        <Text>Go to Hello</Text>

    </TouchableOpacity>
    </View>
  )
}

export default Hi