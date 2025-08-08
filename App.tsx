import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, TextInput, View , Button,Image } from 'react-native';
import { useState} from 'react';
 
export default function App() {
  const[Name,setName] = useState('')
  const[Surname,setSurname] = useState('')
  console.log("App starting up now.")
  return (
    <View>

      <View style={styles.mainPicture}> 
        <Image  style ={styles.ImageSize}
        source = {require('./assets/React_native_img.png')}/>
        
      </View>

       <Text style = {styles.welcomeText}>Welcome your React App!</Text> 
       <View style={styles.InputFlex}>
         <Text style ={styles.TextName}>Enter Name: </Text>
         <TextInput style ={styles.TextName}
         placeholder="Name"
         onChangeText={newText => setName(newText)} />
        </View>
        <View style={styles.InputFlex}>
       <Text style ={styles.TextSurname}>Enter Surname: </Text>
       <TextInput style ={styles.TextName} 
       placeholder= "Surname"
       onChangeText={newText => setSurname(newText)}/>
        </View>
       <Button title = "Add user" onPress={() => {console.log("The user's name and surname is:" + Name + "Surname:" + Surname)}}/>
       <StatusBar style="auto" />
      
      </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
    
  },
  
  ImageSize: {
    width:350,
    height:350
    
  },

  mainPicture:{
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  TextName:{
    color:'red',
    fontSize: 20,
    
  },
  TextSurname:{
    color: 'red',
    fontSize: 20,
    

  },
  InputFlex:{
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-evenly'

  }
  

  
  
});
