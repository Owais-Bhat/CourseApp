import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/welcome.mp4')}
        resizeMode="contain"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill} 
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  overlay: {
    flex: 1,
    padding:10,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  
});

export default Chat;
