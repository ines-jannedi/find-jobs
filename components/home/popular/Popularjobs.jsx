import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import Styles from './popularjobs.style.js';
import {SIZES} from "../../../constants/theme.js";
import {COLORS} from "../../../constants/theme.js";
import PopularJobCard  from "../../common/cards/popular/PopularJobCard.jsx"

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={Styles.headerBtn}> Show all </Text>
           </TouchableOpacity>
      </View>

      <View style={Styles.cardsContainer}>
       {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary}/>
       ): error ? (
        <Text>Something went wrong</Text>
       ) : (
        <FlatList
        data={[1,2,3,4,5,6,7,8]}
        renderItem={({item})=>(
          <PopularJobCard
          item={item}
          />
        )}
        keyExtractor={item => item?.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
        />
       )}

      </View>
    </View>
  )
}

export default Popularjobs