import React, { useRef, useState } from 'react'
import { Pressable, Text, View, TouchableOpacity, ScrollView, FlatList, ImageBackground ,KeyboardAvoidingView} from 'react-native'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'
import { Video } from 'expo-av'
import { TextInput } from 'react-native'


const Header = ({ navigation }) => {

    const [text, settext] = useState('')
    const [status, setstatus] = useState({})
    const vidref = useRef()

    let comments = [
        { name: 'Tahsin', comment: 'hghggjjgfja;ldk;ldksjgiojgioer' },
        { name: 'Tuhin', comment: 'hghggjjgfja;ldk;ldksjgiojgioer' },
        { name: 'Badar', comment: 'hghggjjgfja;ldk;ldksjgiojgioer' }
    ]

    const handlepress = () => {

        navigation.replace('Footer', { a: 2 })


    }

    const handleinp = (text) => {

        settext(text)

    }

    const handleclick = (index) => {

        navigation.push('Footer', { a: index })


    }

    {/* colors={['indigo', 'purple']} */ }
    return (
        <>
        <View style={tw`flex-1 items-center pt-[25] gap-[1]`}>

        <ImageBackground 
        source={require('../assets/sgi-oi-13.jpg')}
        style={{width:'100%',height:'100%',backgroundColor:'teal',flex:1,justifyContent:'center',alignItems:'center'}}
        resizeMode='stretch'
        blurRadius={350}
        >
                <Video
                    style={{ width: '96%', height: 200, borderRadius: 10, backgroundColor: 'teal'}}
                    useNativeControls
                    resizeMode='cover'
                    source={require('../public/Big Buck Bunny-720p.mp4')} />
                {/* <KeyboardAvoidingView style={{flex:1}}> */}
                <FlatList
                    data={[1,1]}
                    renderItem={({ item, index }) => (
                        <Text style={{ fontSize: 20,marginVertical:10,paddingHorizontal:10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat non commodi labore odit autem culpa. Debitis dolor cum, sint aperiam iste culpa dolores saepe similique provident rerum! Necessitatibus alias veniam fuga recusandae accusamus, voluptates perspiciatis quia provident qui corporis voluptatibus quasi quo eveniet sunt nisi, harum ex. Numquam sed!</Text>
                    )}
                />

                <TextInput style={{ backgroundColor: 'slategray', width: '95%', height: 40, marginVertical: 5, borderRadius: 5,paddingHorizontal:5 }} />
                {/* </KeyboardAvoidingView> */}
                </ImageBackground>
            </View>
        </>
    )
}

export default Header