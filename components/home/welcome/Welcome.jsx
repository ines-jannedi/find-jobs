import {useState }from 'react'
import { View, Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';
 import { useRouter } from 'expo-router';
import styles from './welcome.style.js'
import {SIZES} from "../../../constants/theme.js";
import {COLORS} from "../../../constants/theme.js";
import icons from "../../../constants/icons.js"


const jobTypes = ["Full-time", "Part-time", "contractor"];

const Welcome = () => {
  const router =useRouter()
  const [activeJobType,setActiveJobType] = useState('Full-time')



  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>{"Hello ines".trim()}</Text>
<Text style={styles.welcomeMessage}>{"Find your perfect job".trim()}</Text>


      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value=""
          onChange={()=>{}}
          placeholder='What are you looking for?'
          />
        </View>





        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        keyExtractor={(item)=>item}
          renderItem={({item})=>(
          <TouchableOpacity
          style={styles.tab(activeJobType, item)}
          onPress={() => {
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text> {/* only contractor is clicked */}
          </TouchableOpacity>
          )}
         contentContainerStyle={{columnGap: SIZES.small}}
         horizontal
        />

      </View>
    </View>
  )
}

export default Welcome