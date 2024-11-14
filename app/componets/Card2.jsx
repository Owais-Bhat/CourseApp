import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';

const Card2 = ({ title, creator, progress }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/course.jpg')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.creator}>Created by <Text style={styles.creatorName}>{creator}</Text></Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.progressText, { color: progress === 100 ? '#4CAF50' : '#ff8c00' }]}>
          {progress === 100 ? 'Completed' : `In Progress: ${progress}%`}
        </Text>
        <ProgressBar 
          progress={progress / 100} 
          color={progress === 100 ? '#4CAF50' : '#2A7086'}
          style={styles.progressBar} 
        />
      </View>
      <View style={styles.tag}>
        <Text style={styles.tagText}>Learning Path</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  content: {
    flex: 1,
  },
  creator: {
    fontSize: 12,
    color: '#6c757d',
  },
  creatorName: {
    color: '#2A7086',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  progressText: {
    fontSize: 12,
    marginVertical: 5,
  },
  progressBar: {
    height: 6,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },
  tag: {
    backgroundColor: '#e1f5fe',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignSelf: 'center',
  },
  tagText: {
    fontSize: 12,
    color: '#2A7086',
    fontWeight: 'bold',
  },
});

export default Card2;
