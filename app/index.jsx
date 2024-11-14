import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import {Video} from "expo-av"

const WelcomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('./tabs/home');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/welcome.mp4')} 
        style={StyleSheet.absoluteFill}
        resizeMode="contain"
        shouldPlay
        isLooping
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', },

  absoluteFill:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1000, 
  }
 
});

export default WelcomePage;
