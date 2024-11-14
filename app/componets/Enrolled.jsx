// EnrolledTrainings.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../componets/Card2';
import { Icon } from 'react-native-elements';

const Enrolled = () => {
  const trainingData = [
    {
      image: 'https://www.freepik.com/free-vector/woman-working-home-concept-flat-design_26213147.htm#fromView=search&page=1&position=0&uuid=3f477c6d-2a92-4cd2-be69-9a38a6c6fbd6',
      title: 'Javascript Bootcamp',
      creator: 'ABC',
      progress: 40,
      label: 'In Progress',
    },
    {
      image: 'https://drive.google.com/file/d/18uVN7AJeAThdET1DpJG59SiVwsZ7m8v0/view?usp=sharing',
      title: 'Javascript Bootcamp',
      creator: 'ABC',
      progress: 40,
      label: 'Completed',
    },
    {
        image: 'https://drive.google.com/file/d/18uVN7AJeAThdET1DpJG59SiVwsZ7m8v0/view?usp=sharing',
        title: 'Javascript Bootcamp',
        creator: 'ABC',
        progress: 100,
        label: 'Completed',
      },
    
  ];

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.heading}>Enrolled Trainings</Text>
        <Text style={styles.seeMore}>see more { <Icon name='arrow-right' type='feather' size={14} color='#2A7086'  style={{}} />} </Text>
       
      </View>
      <ScrollView vertical style={styles.list} showsHorizontalScrollIndicator={false}>
        {trainingData.map((training, index) => (
          <Card key={index} {...training} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
  },
  list:{
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    fontSize: 14,
    color: '#2A7086',
    marginLeft: 120
  },
});

export default Enrolled;
