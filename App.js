import React from 'react';
import {ImageBackground} from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./src/images/bg-splash.jpeg')} resizeMode="cover" 
    style={{flex: 1}}>
    </ImageBackground>
  );
}


