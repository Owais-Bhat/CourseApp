// Courses.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from './Card';
import { Icon } from 'react-native-elements';

const Courses = () => {
  const courseData = [
    {
      
      title: 'MERN Stack Tracker',
      creator: 'ABC',
      progress: 30,
    },
    {
       
        title: 'MERN Stack Tracker',
        creator: 'ABC',
        progress: 30,
      },
      {
       
        title: 'MERN Stack Tracker',
        creator: 'ABC',
        progress: 30,
      },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.heading}>Courses</Text>
        <Text style={styles.seeMore}>see more{  <Icon name='arrow-right' type='feather' size={14} color='#2A7086'  />}</Text>
      
      </View>
      <ScrollView horizontal style={styles.list} showsHorizontalScrollIndicator={false}>
        {courseData.map((course, index) => (
          <Card key={index} {...course} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    
 marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  list:{
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 14,
    color: '#2A7086',
    marginLeft:200
  },
});

export default Courses;
