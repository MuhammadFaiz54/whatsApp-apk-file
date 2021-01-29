import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';




class Call extends Component {
  
    render(){
  return (
    <View style={styles.container}>
<View style={{marginTop:130,backgroundColor:'green',height:70,width:'100%',flexDirection:'row',alignItems:'center'}}>
      <View style={styles.nav1}>
        <Text style={styles.heading}>WhatsApp</Text>
        </View>
        <View style={styles.icons}>
      <Ionicons name="search" size={26} color="white" />
      <MaterialIcons name="message" size={26} color="white" />
      <SimpleLineIcons name="options-vertical" size={24} color="white" />

        </View>
      </View> 
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize:22,
    color:'white',
    paddingLeft:15,
  },
  nav1:{
    width:"65%",
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'30%'
  }
});
export default Call;