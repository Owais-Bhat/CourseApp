import { View, Text ,ScrollView , StyleSheet} from 'react-native'
import React from 'react'
import Courses from '../componets/Courses'
import Enrolled from '../componets/Enrolled'
import LearningPath from '../componets/LerningPath'
const Explore = () => {
  return (
    
  
  <ScrollView contentContainerStyle={styles.tabContent} showsVerticalScrollIndicator={false}>
      
      <Courses/>
      <LearningPath/>
      <Enrolled/>
     
    </ScrollView>
  )
}
 const styles = StyleSheet.create({
  tabContent:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#f9f9f9'
  }
 })
export default Explore