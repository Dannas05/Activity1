import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, TextInput, View , Button,Image } from 'react-native';
import { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();
 
export default function App() {
  return(
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={MainScreen}/>
          <Stack.Screen name="ViewDetails" component={ViewDetails}/>
       </Stack.Navigator>
    </NavigationContainer>


  )
}


function MainScreen() {
  
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
       <Button title = "Add user" onPress={() => {console.log("The user's name and surname is:" + Name + "Surname:" + Surname )}}/>
       <StatusBar style="auto" />
      
      </View>
      
  );
}

function ViewDetails({navigation,route}:any){
  const NameGet = route.params.NameSend ; 
  const SurnameGet = route.params.SunameSend;

  return(
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Name : {NameGet} Surname: {SurnameGet}</Text>
    </View>
  )
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
