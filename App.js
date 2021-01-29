import { StatusBar } from 'expo-status-bar';
import React , {Component } from 'react';
import { StyleSheet,  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Home from './src/Components/Home';
import Call from './src/Components/Call';
import Status from './src/Components/Status';
import Header from './src/Components/Header';
import Chat from "./src/Components/Chat";


var obj1 = {
  Home:{
    screen:Home,
  },
  Status:{
    screen:Status,

  },
  Call:{
    screen:Call,
  },


}
var obj2 ={
  tabBarOptions:{
    labelStyle: {
      fontSize: 15,
    fontWeight:'bold'

      
    },
  style:{
    
     marginTop:100,
      backgroundColor:'green'
  },
}
}


const AppNavigator = createMaterialTopTabNavigator(obj1,obj2)

const AppStack = createStackNavigator({
  Home:{
    screen:AppNavigator,
    navigationOptions:{
      header:<Header />
    }
  },
  
  Chat:{
    screen:Chat,
    navigationOptions: {
      headerShown: false,
    }
  }

})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createAppContainer (AppStack)