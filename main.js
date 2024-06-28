import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "./paths/header"
import Footer from "./paths/footer"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Hi from "./paths/hi";
import Fav from "./paths/Fav";
import Details from "./paths/Details";
import { View } from "react-native";
import Blur from "./paths/Blurbg";


const stack = createNativeStackNavigator()
const tab = createBottomTabNavigator()




const Tabnavigator = () => {
  return <>
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let icon;
          if (route.name === 'Details') {

            icon = 'list'
            color = !focused ? 'rgba(255,255,255,0.6)' : '#fff'

          }
          else if (route.name == 'Favourites') {

            icon = 'heart'
            color = !focused ? 'rgba(255,255,255,0.6)' : '#fff'

          }
          else {

            icon = 'house'
            color = !focused ? 'rgba(255,255,255,0.6)' : '#fff'

          }
          return <FontAwesome6 name={icon} size={22} color={color} />
        },
        tabBarStyle: {

          backgroundColor: '#003',
          height: 70,
          borderRadius: 30,
          borderColor: '#000'
        },

        //Color of tab title when active
        tabBarActiveTintColor: '#fff',

        //Color of tab title when inactive
        tabBarInactiveTintColor: '#fff',

        //Color of tab container when active
        tabBarActiveBackgroundColor: '#007',

        //Color of tab container when active
        tabBarInactiveBackgroundColor: '#005',

        //For editing each container of tabs
        tabBarItemStyle: {
          borderRadius: 20,
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
        }

      })}


    >

      <tab.Screen
        name="Home"
        //Stacknavigator screens will be available for Home tab
        component={Stacknavigator}
        options={{ header: () => null }} />

      <tab.Screen
        name="Details"
        // component={Stacknavigator2}
        //  Make a stacknavigator2 function with screens and use them here
        component={Stacknavigator2}
        options={{ header: () => null }} />

      <tab.Screen
        name="Favourites"
        component={Hi}
        options={{ header: () => null }} />

    </tab.Navigator>

  </>
}

const Stacknavigator = () => {

  return <>

    <stack.Navigator>

      <stack.Screen
        name="Header"
        component={Blur}
        options={{ header: () => null }} />

      <stack.Screen
        name="Footer"
        component={Footer}
        options={{ header: () => null }} />

    </stack.Navigator>

  </>

}
const Stacknavigator2 = () => {

  return <>

    <stack.Navigator>

      <stack.Screen
        name="Favourite"
        component={Fav}
        options={{ header: () => null }} />

      <stack.Screen
        name="Detail"
        component={Details}
        options={{ header: () => null }} />

    </stack.Navigator>

  </>

}


//For future use(if needed)

const Stacknavigator3 = () => {


  return <>


  </>

}


const Main = () => {

  return (

    <>
    {/* This approach works like position absolute property but better */}
    <View style={{flex:1}}>
      <NavigationContainer>
        <Tabnavigator />
      </NavigationContainer>
    </View>
    </>

  )
}

export default Main


