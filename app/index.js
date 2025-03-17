import { useState } from "react";
import { View, ScrollView, SafeAreaView} from "react-native";
import { Stack, useRouter } from "expo-router";

import icons from "../constants/icons.js"
import images from "../constants/images.js"
import {SIZES} from "../constants/theme.js"
import {COLORS} from "../constants/theme.js"


import Nearbyjobs from "../components/home/nearby/Nearbyjobs.jsx"
import Popularjobs from "../components/home/popular/Popularjobs.jsx"
import  Welcome from "../components/home/welcome/Welcome.jsx"
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn.jsx"



const Home = () => {
    const router = useRouter()
    return (
       
        <SafeAreaView style={{flex:2 , backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: {
                    backgroundColor : COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    headerRight: () =>(
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                    headerTitle:""            }}
                    />
                  
                    <ScrollView showsVerticalScrollIndicator={false}> {/*up and down */}
                        
                        <View
                        style={{
                            flex:1,
                            padding: SIZES.medium
                        }}
                        >
                            <Welcome/>
                            <Popularjobs/>
                            <Nearbyjobs/>

                        </View>
                        
                    </ScrollView>
                    
        </SafeAreaView>
        
    )
}

export default Home;
