import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { BlurView } from 'expo-blur'
import { ScrollView } from 'react-native'


const Blur = () => {


    return <>

        {/* <View style={tw`flex-1 justify-center items-center`}>

        <Text style={tw`text-[8]`}>Blur</Text>

    </View> */}

        <ImageBackground
            resizeMode='cover'
            blurRadius={18}
            source={require('../assets/pbg.png')} style={tw`flex-1 justify-center items-center bg-[rgba(0,0,0,0.3)] pt-[40]`}>
        {/* <ImageBackground
            resizeMode='cover'
            blurRadius={18}
            source={require('../assets/pbg.png')} style={tw`flex-1 justify-center items-center bg-indigo-900 pt-[40]`}> */}
            <ScrollView>
                <BlurView
                    intensity={500}
                    style={tw`bg-[rgba(255,255,255,.01)] h-[80] w-[90] overflow-hidden rounded-[5] py-[12] px-[8] mb-[8]`}>
                    <Text style={tw`text-center`}>Hello</Text>
                    <Text style={tw``}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum consequuntur ex debitis sint quasi accusantium? Eius optio, deleniti corrupti vel consequuntur expedita laborum?</Text>
                </BlurView>
                <BlurView
                    intensity={500}
                    style={tw`bg-[rgba(255,255,255,.01)] h-[80] w-[90] overflow-hidden rounded-[5] py-[12] px-[8]`}>
                    <Text style={tw`text-center `}>Hello</Text>
                    <Text style={tw``}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum consequuntur ex debitis sint quasi accusantium? Eius optio, deleniti corrupti vel consequuntur expedita laborum?</Text>
                </BlurView>
                
            </ScrollView>

        </ImageBackground>

    </>
}


export default Blur