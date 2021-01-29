import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Chat } from "../Chat";
export default class First extends Component{

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
  return (
    <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('Chat')}}  >

  <View  key={ind}  style={styles.notification}>
    
      
    <View style={styles.emoji}>
   <Image 
style={{height:60,width:60,marginLeft:10}}
source={{
  uri:'https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-cool-emoji-emoticon-by-vexels.png'
}}
/>
<View style={{paddingLeft:10 }}>
  <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
  <Text style={{fontSize:18,fontWeight:'bold',width:'55%'}}>Muhammad Faiz</Text>
  <Text style={{alignItems:'flex-end',flexDirection:'row', width:'45%',color:'#757575',fontSize:12}}> YESTERDAY </Text>
  </View>
  <View style={{flexDirection:'row',height:30,alignItems:'center'}}>
  <Text style={{color:'#757575',width:'68%'}}>Assalam o Alikum</Text>
  <View style={{width:'20%'}}>
  <View style={{width:23,height:23,backgroundColor:'#00C853',borderRadius:100,alignItems:'flex-end'}}><Text style={{color:'white',fontSize:18,marginRight:6}}>1</Text></View>
  </View>
  </View>
</View>
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
</TouchableOpacity>
  
)})}
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
