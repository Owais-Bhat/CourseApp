import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Courses from '../componets/Courses'
import Enrolled from '../componets/Enrolled'
import LearningPath from '../componets/LerningPath'

const Ongoing = () => {
  return (
    <ScrollView style={{backgroundColor: 'white', }}>
      <Courses/>
      <LearningPath/>
      <Enrolled/>
     </ScrollView>
  )
}

export default Ongoing