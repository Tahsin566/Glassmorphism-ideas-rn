import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NunitoSans_400Regular, Poppins_400Regular, RoadRage_400Regular, Roboto_400Regular, Roboto_500Medium, SansitaSwashed_300Light, useFonts } from "@expo-google-fonts/dev"
import Main from './main';



export const fonts = {
  poppins_regular: 'Poppins_400Regular',
  roadrage_regular: 'RoadRage_400Regular',
  sansita_light: 'SansitaSwashed_300Light',
  nunito_regular: 'NunitoSans_400Regular',
  roboto_regular: 'Roboto_500Medium'
}

// Roboto_400Regular is the default fonts for expo app

export default function App() {

  const [fontsLoades] = useFonts({
    Poppins_400Regular,
    RoadRage_400Regular,
    SansitaSwashed_300Light,
    NunitoSans_400Regular,
    Roboto_500Medium
  })

  return (
    <>
      {fontsLoades &&
        <Main />
      }
    </>
  );
}


