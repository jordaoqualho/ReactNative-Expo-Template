import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Routes from '@app/routes';
import {name as appName} from './app.json';


export default function App() {  
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  }  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E2E2E2" />
      <Routes /> 
    </>
  ); 
}
AppRegistry.registerComponent(appName, () => App);