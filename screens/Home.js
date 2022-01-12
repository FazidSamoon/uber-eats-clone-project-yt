import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Catagory from "../components/Catagory";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItems";
import BottomTabs from "../components/BottomTabs";
//import { Divider } from "react-native-elements";

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";


export default function Home(){
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city , setCity] = useState("San Fransisco");
    const[activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`
    

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };
    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) =>
      setRestaurantData(
        json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        )
      )
    );
    };

    useEffect(() => {
        getRestaurantFromYelp();
    }, [city, activeTab])
    return(
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Catagory />
                <RestaurantItem restaurantData = {restaurantData} />
                
            </ScrollView>
            
            <BottomTabs />
        </SafeAreaView>
    )
}