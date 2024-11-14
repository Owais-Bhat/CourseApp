import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = ({ userName, profileImage }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {/* Logo */}
        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        {/* Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="search" type="feather" color="#fff" size={20} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Icon name="bell" type="fontisto" color="#fff" size={20} style={{marginTop: 5}} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Image source={require('../../assets/user.png')} 
         style={styles.profileImage} />
        <View>
          <Text style={styles.greetingText}>Hello! {userName}</Text>
          <Text style={styles.subGreetingText}>What do you wanna learn today?</Text>
        </View>

        {/* Flame Icon */}
        <View style={styles.flameContainer}>
            
          <Icon name="local-fire-department" type="material-icons" color="#fff" size={30}   style={styles.Icon1} />
          <Text style={styles.daysText}>3 days</Text>
        </View>
        <View style={styles.daysContainer}>
     
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex:0.18,
    backgroundColor: '#2A7086',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  daysContainer:{
flexDirection: "column"
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: 100,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 10,
  },
  greetingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 250,
    marginRight: 10,
    borderWidth: 0.6,
    borderColor: '#fff',
    resizeMode:"contain",
    elevation:5,
  },
  greetingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreetingText: {
    color: '#e0e0e0',
    fontSize: 14,
  },
  flameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
    marginTop: 4
},
  daysText: {
    color: '#fff',
    fontSize: 10,
    
  },
  icon:{
    borderWidth:1,
    borderColor:'#fff',
    padding:5,
    borderRadius:50,
    backgroundColor:"rgba(255, 255, 255, 0.1)",
    elevation:5,
  
  },
  Icon1:{
borderWidth:1,
    borderColor:'#fff',
    padding:3,
    borderRadius:50,
    elevation:5,
    
  }
});

export default Header;
