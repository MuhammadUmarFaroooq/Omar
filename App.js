import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
   
    <Image style={styles.img} source={require("../Omar/assets/myimg.png")} />
      <Text style={styles.textstyl}>Muhammad Umar Farooq</Text>
       <Text style={styles.textstyl2}>201400127</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbc639',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textstyl:{
  
    paddingTop: 20,
    fontSize: 25,
   
    fontWeight: 'bold'
  },
  img: {
   width: 200,
   height: 200
  },
  textstyl2:{
  
    paddingTop: 10,
    fontSize: 15,
   
    fontWeight: 'bold'
  }
});
