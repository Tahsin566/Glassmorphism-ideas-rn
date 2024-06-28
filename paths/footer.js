
import { Text, View, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { LinearGradient } from 'expo-linear-gradient'

const Footer = ({ navigation,route }) => {
    
    let arr = [
        {name:'Tahsin',age:22,comment:'hghggjjgfja;ldk;ldksjgiojgioer'},
        {name:'Tuhin',age:21,comment:'hghggjjgfja;ldk;ldksjgiojgioer'},
        {name:'Badar',age:23,comment:'hghggjjgfja;ldk;ldksjgiojgioer'}
    ]

    let p = route.params.a
    
    return (
        
        <LinearGradient 
        colors={['indigo','purple']}
        style={{flex:1}}
        >
        <View style={tw`flex-1 justify-center items-center gap-[12]`}>
            <Text style={{ fontSize: 20,color:'white' }}>
                Footer
            </Text>
            <Text style={tw`text-white text-[5]`}>{arr[p].name}</Text>
            <Text style={tw`text-white text-[5]`}>{arr[p].age}</Text>
            <Text style={tw`text-white text-[5]`}>{arr[p].comment}</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Header')}} style={tw`bg-purple-800 rounded-[3]`}>

                <Text style={tw`text-white p-[10]`}>Go to Header</Text>

            </TouchableOpacity>
        </View>
        </LinearGradient>
    )
}

export default Footer