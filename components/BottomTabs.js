import React from "react";
import { Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs(){
    return(
        <View style={{
            position:"fixed",
            width: "100%",
            marginTop:"90%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            
        }}> 
            <Icon icon="home" text="Home" />
            
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );