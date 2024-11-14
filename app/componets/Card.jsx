
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({  title, creator, progress, label }) => {
  return (
    <View style={styles.card}>
      <Image source={require("../../assets/course.jpg")} style={styles.image} />
      <Text style={styles.creator}>Created by {creator}</Text>
      <Text style={styles.title}>{title}</Text>
      {progress !== undefined && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{progress}%</Text>
        </View>
      )}
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height:200,
    width: 160,
    padding: 5,
    margin: 5,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d9e6',
    paddingTop: 20,
   
    elevation: 3,
    justifyContent: 'center',
    
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    paddingTop: 10,
    borderRadius: 5,
    marginBottom: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: '#2A7086',
  },
  creator: {
    fontSize: 10,
    color: '#888',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginRight: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#2A7086',
    borderRadius: 3,
    marginBottom: 5,
  },
  progressText: {
    fontSize: 10,
    color: '#2A7086',
  },
  labelContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,

  },
  labelText: {
    fontSize: 10,
    color: '#2A7086',
  },
});

export default Card;
