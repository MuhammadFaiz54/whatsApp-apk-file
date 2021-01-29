import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, TextInput, ScrollView, StyleSheet, Text, View, ImageBackground, InputAccessoryView, SafeAreaView, KeyboardAvoidingView, onChangeText, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as firebase from 'firebase';
import "firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment'
const firebaseConfig = {
  apiKey: "AIzaSyAk7rOmx57uk0S5QYjwzDbDVOdthet6qHg",
  authDomain: "whatsapp-with-moment.firebaseapp.com",
  projectId: "whatsapp-with-moment",
  storageBucket: "whatsapp-with-moment.appspot.com",
  messagingSenderId: "926263674183",
  appId: "1:926263674183:web:44a8b99cbf503a21c33862"
}
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
 }

 const db = firebase.firestore()
export default class Chat extends Component {

  constructor() {
    super()

    this.state = {
      text1:'',
      allmsgs:[]

    }
  }
  componentDidMount() {
    this.getdata()
  }
  send =() =>{
    const {text1} = this.state
  db.collection('text').add({ value:text1,createdAt:Date.now()})
  .then(()=>{
    this.setState({text1:''})
  })
  }

  getdata= () =>{
    db.collection ('text').onSnapshot( val=>{
    const arr =[]
      val.forEach(doc=>{
    arr.push(doc.data())
    const newArr = arr.sort((a,b)=>a.createdAt - b.createdAt)
    this.setState({allmsgs:newArr})
    })
    })
    
    }

  render() {
    console.log('asdasdasdasdas')
    const { allmsgs } = this.state
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{ flexDirection: 'row', }} >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
              <AntDesign name="arrowleft" size={24} color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={{
                uri:
                  'https://cdn.hipwallpaper.com/i/3/80/B5RlpT.png'
              }}
            />
            <Text style={styles.name}>
              Muhammad Faiz
      </Text>
          </View>

          <View style={styles.iconss}>
            <MaterialIcons name="videocam" size={33} color="black" />
            <Ionicons name="call" size={24} color="black" />
            <SimpleLineIcons name="options-vertical" size={24} color="black" />


          </View>
        </View>
        <View>
          <View>
            <ImageBackground
              style={{ height: 670, width: '100%', }}
              source={{ uri: 'https://wallpaperaccess.com/full/1288076.jpg' }}
            >


              <ScrollView>
                {/* <View style={{ marginLeft: 10 }} >
                  {this.state.Value.map((ind, val) => {
                    return <View style={styles.tex}>
                      <Text style={{ fontSize: 17, fontStyle: 'italic', fontWeight: 'bold' }}>Hello  Faiz</Text>
                    </View>
                  })}
                </View> */}

                {/* <View style={styles.send}>
                  {this.state.text.map((ind, val) => {
                    return <View style={styles.tex1}>

                      <Text style={{ fontSize: 17, fontStyle: 'italic', fontWeight: 'bold' }}>Hello  </Text>
                    </View>
                  })}
                </View> */}
{/* {/* {this.state.allmsgs.map((val,ind)=>{ <View style={{marginTop:50}}>
    <Text style={{color:'white'}}>{val.value}</Text>
  </View>
})} */}

<Text style={{color:'white'}}>{this.state.text1}</Text> 

{allmsgs.map((val, ind) => <View 
            >
              <View style={{height: 40, borderRadius:6 ,backgroundColor:'white', width:'60%', flexDirection:'row', marginVertical:10, justifyContent: 'space-around', alignItems:'center', marginHorizontal:20}}>
            <Text
              style={{ fontSize: 20, fontWeight:'bold'}}
              key={ind}>{val.value}</Text>
              <Text style={{color: '#757575', fontSize:14}}>{moment(val.createdAt).format('h:mm a')}</Text>
              </View>
        </View>
        )}
              </ScrollView>
             
            
            </ImageBackground>
          </View>
        </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', position:'absolute', bottom:0 }}>
                <View style={styles.footer}>
                  <Entypo name="emoji-flirt" size={24} color="gray" style={{ marginLeft: 10 }} />
                  <TextInput
                  onChangeText={(e)=>{this.setState({text1:e})}}
                  value={this.state.text1}
                    placeholder={'enter spome Text'}
                    style={{ marginHorizontal: 10, width: 130, }}
                  >

                  </TextInput>
                  <Button title={'send'} onPress={this.send} />
                  <Entypo name="attachment" size={20} color="gray" style={{ marginLeft: 5 }} />
                  <FontAwesome name="camera" size={20} color="gray" style={{ marginLeft: 5 }} />
                </View>

                <View style={styles.voice}><MaterialIcons name="keyboard-voice" size={25} color="white" style={{ marginLeft: 13 }} /></View>
              </View>


      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'seagreen',
    marginTop: 30,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1.5

  },
  logo: {
    height: 35,
    width: 35,
    borderRadius: 100
  },
  name: {
    paddingLeft: 5,
    fontSize: 17,
  },
  iconss: {
    flex: 1,
    backgroundColor: 'seagreen',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  tex: {
    backgroundColor: '#fff',

    width: '60%',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10

  },
  tex1: {
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10
  },
  send: {
    alignItems: 'flex-end',
    marginRight: 10
  },
  footer: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 290,
    borderRadius: 100,
    marginBottom: 5,
    marginLeft: 5
  },
  voice: {
    height: "90%",
    marginBottom: 5,
    width: 50,
    marginLeft: 10,
    backgroundColor: 'seagreen',
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row'
  }

});

