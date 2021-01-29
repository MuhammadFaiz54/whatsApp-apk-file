import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Chat} from "../Chat";
export default class Status extends Component{

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
<View style={styles.emoji}>
   <Image 
style={{height:60,width:60,marginLeft:10}}
source={{
  uri:'https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-cool-emoji-emoticon-by-vexels.png'
}}
/>
<View style={{paddingLeft:10 }}>
  <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
  <Text style={{fontSize:18,fontWeight:'bold',width:'55%'}}>My Status</Text>
  <Text style={{alignItems:'flex-end',flexDirection:'row', width:'45%',color:'#757575',fontSize:12}}></Text>
  </View>
  <View style={{flexDirection:'row',height:30,alignItems:'center'}}>
  <Text style={{color:'#757575',width:'68%'}}>Tap to add status update</Text>
  
  </View>
</View>
</View>
<View
  style={{
    height:30,
    backgroundColor:'#E0E0E0',
    width:'96%',
    marginLeft:'2%'
  }}
><Text style={{fontWeight:'bold',color:'gray',padding:6}}>Recent Updates</Text></View> 
{this.state.noti.map((ind,val)=>{
  return <View  style={styles.notification}>
    <View style={styles.emoji}>
   <Image 
style={{height:60,width:60,marginLeft:10}}
source={{
  uri:'https://images.vexels.com/media/users/3/134485/isolated/preview/bcde859a8ad3a45cb93aed78d8a63686-cool-emoji-emoticon-by-vexels.png'
}}
/>
<View style={{paddingLeft:10 }}>
  <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
  <Text style={{fontSize:16,fontWeight:'bold',width:'55%'}}>Muhammad Faiz</Text>
  <Text style={{alignItems:'flex-end',flexDirection:'row', width:'45%',color:'#757575',fontSize:12}}>  </Text>
  </View>
  <View style={{flexDirection:'row',height:30,alignItems:'center'}}>
  <Text style={{color:'#757575',width:'68%'}}>Today,4:37 AM</Text>
  <View style={{width:'20%'}}>
  </View>
  </View>
  
</View>
</View>
<View
  style={{
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width:'85%',
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
