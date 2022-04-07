import React, { Component, useState } from "react";
import { useFonts } from 'expo-font';

import NavigationContainer from './src/routes/drawer'
import EditScreen from './src/screens/profile/edit'


function App() {
  const [loaded] = useFonts({
    FuturaBook: require('./assets/fonts/FuturaPTBook.otf'),
    FuturaHeavy: require('./assets/fonts/FuturaPTHeavy.otf'),
    FuturaLight: require('./assets/fonts/FuturaPTLight.otf'),
    FuturaMedium: require('./assets/fonts/FuturaPTMedium.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer />
  );
}

export default App;
