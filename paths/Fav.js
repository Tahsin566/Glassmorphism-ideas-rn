import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur';
import car from '../assets/sgi-oi-13.jpg'


const Fav = ({navigation}) => {
  return (
    <View style={tw`flex-1 justify-center items-center gap-[10]`}>
      <Text style={[tw`text-[7]`,{}]}>Favourite</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Detail')}}>
        <Text>Go to details</Text>
      </TouchableOpacity>
      {/* <ImageBackground 
      resizeMode='contain'
      style={tw`h-[100] w-[140] bg-red-600`} source={car}>

        <View style={tw`h-[50] w-[80] overflow-hidden rounded-[10] m-auto`}>
        <BlurView intensity={80}  
        style={tw`h-[100%] w-[100%] bg-[rgba(255,255,255,0.1)]`}/>
        </View>
      </ImageBackground> */}

      
      
    </View>
  )
}

export default Fav