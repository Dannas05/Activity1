import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, TextInput, View , Button,Image } from 'react-native';

export default function App() {
  return (
    <View>

      <View> 
        <Image source = {require('./img/React_native_img.png')}/>
        
      </View>

       <Text style = {styles.welcomeText}>Welcome your React App!</Text> 
       <Text>Enter Name: </Text>
       <TextInput placeholder="Name" />
       <Text>Enter Surname: </Text>
       <TextInput placeholder= "Surname"/>
       <Button title = "Add user"/>
       <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  }
  
  
});
