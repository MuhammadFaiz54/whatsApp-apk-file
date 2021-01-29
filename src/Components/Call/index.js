import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Chat} from "../Chat";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default class Call extends Component{

  constructor () {
    super()
    this.state={
      noti :[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }
  render (){

  
  return (
    <View style={styles.container}>
      
      {/* nav Barr */}

      



      
{/* notifications with scroll */}
<ScrollView>
{this.state.noti.map((ind,val)=>{
  return <View key={ind}  style={styles.notification}>
    <View style={styles.emoji}>
   <Image 
style={{height:60,width:60,marginLeft:10}}
source={{
  uri:'https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-cool-emoji-emoticon-by-vexels.png'
}}
/>
<View style={{paddingLeft:10 ,width:'68%',}}>
  <Text style={{fontSize:16,fontWeight:'bold'}}>Muhammad Faiz</Text>
  <View style={{flexDirection:'row'}}>
  <Feather name="arrow-down-left" size={20} color="red" />
  <Text>December 24, 10:49 Am</Text></View>
  </View>
  <View><FontAwesome name="phone" size={30} color="green" /></View>
</View>
<View
  style={{
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width:'80%',
    marginLeft:'15%'
  }}
/> 
  </View>
})}
</ScrollView>



    </View>
  );
}
}

const styles = StyleSheet.create({
  notification:{
   marginBottom:5
  },
  
 

  
  
  
 
  
  secndnav:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  ccc:{
    fontSize:15,
    color:'white',
    fontWeight:'bold'
  },
  
  emoji:{
    height:90,

    flexDirection:'row',
    alignItems:'center'
  }
});
