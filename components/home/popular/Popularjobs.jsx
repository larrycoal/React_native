import React, { useState } from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import  PopularjobsCards  from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter()
  const [] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popolar jobs</Text>
      </View>
    </View>
  )
}

export default Popularjobs