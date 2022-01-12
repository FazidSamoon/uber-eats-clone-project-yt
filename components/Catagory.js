import React from "react";
import {View , Text, Image, ScrollView} from "react-native";

const items=[
    {
        image: require("../assests/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assests/images/soft-drink.png"),
        text: "Soft drinks",
    },
    {
        image: require("../assests/images/bread.png"),
        text: "Bakery items",
    },
    {
        image: require("../assests/images/fast-food.png"),
        text: "Fast foods",
    },
    {
        image: require("../assests/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assests/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../assests/images/desserts.png"),
        text: "Dessert",
    },
]
export default function Catagories(){
    return(
        <View style={{
            marginTop:5,
            backgroundColor:"#fff",
            paddingVertical: 10,
            paddingLeft :20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item,index) => (
                <View key={index} style={{alignItems: "center", marginRight:30}}>
                <Image source={item.image}  style={{
                    width:50,
                    height:40,
                    resizeMode: "contain",
                }}/>
                <text style={{fontSize:13, fontWeight:"900"}}>{item.text}</text>
                </View>
            ))}
            
            
        </ScrollView>
        </View>
    )
}