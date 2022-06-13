import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [text,setText] = useState("Que fome!!!!!"); 
  const [disableButton,setDisableButton] = useState(false);
  const [photo,setPhoto] = useState(require("./images/before_cookie.jpg"));

  function onPressButton(){
    setText("Hummmmm\nEstava uma delícia!!!!!");
    setDisableButton(true);
    setPhoto(require('./images/after_cookie.jpg'));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {text}
      </Text>
      <Image
        source={photo}
        style={styles.photo} 
      />
      <Button
        title="COMER!!!!"
        color="#841584"
        disabled = {disableButton}
        onPress={onPressButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  }
});