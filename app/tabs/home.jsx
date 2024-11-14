import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../componets/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ongoing from '../screens/Ongoing';
import Assigned from '../screens/Assigned';
import Explore from '../screens/Explore';

// Dummy components for each tab
function OngoingScreen() {
  return (
    <Ongoing/>
  )
}

function AssignedScreen() {
  return (
    <Assigned/>
  );
}

function ExploreScreen() {
  return (
    <Explore/>
  );
}

const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },
        tabBarStyle: { backgroundColor: '#fff', elevation: 0 },
        tabBarContentContainerStyle: styles.tabBarContainer,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIndicatorStyle: {
          backgroundColor: '#2A7086',
          height: '70%',
          borderRadius: 10,
          marginHorizontal: 0,
          paddingHorizontal: 10,
          borderWidth: 2,
          borderColor: '#fff',
          elevation: 5,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#2A7086',
      }}
    >
      <Tab.Screen name="Ongoing" component={OngoingScreen} />
      <Tab.Screen name="Assigned" component={AssignedScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view:{
    flex:1
  },
  tabContent: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 6,
   
  },
  tabBarContainer: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  tabBarItem: {
    borderRadius: 10,
  },
});
