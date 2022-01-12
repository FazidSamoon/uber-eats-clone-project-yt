import React, { useState } from "react";
import { TouchableOpacity } from "react-native";


export default function HeaderTabs(props){
    
    return(
        <view style={{display:"flex",flexDirection:"row", alignSelf:"center"}}>
            <HeaderButton 
                text="Delivery" 
                btnColor="black" 
                textColor="white" 
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </view>
    )
}

const HeaderButton = (props) => (
<view>
    <TouchableOpacity
    style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:30,
        
     }}
     onPress={() => props.setActiveTab(props.text)}
    >
        <text 
        style={{
            color:props.activeTab === props.text ? "white" : "black", 
            fontSize:15,
            fontWeight:900,
            }}
        >
            {props.text}
        </text>
    </TouchableOpacity>
</view>
);