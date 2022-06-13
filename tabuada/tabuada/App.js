import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [text, setText] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>APP Tabuada</Text>
      <Card>
      <TextInput 
          placeholder = "Informe um número"
          onChangeText = {text => setText(text)}
          defaultValue={text}
        />
      </Card>
      <Text style={styles.title}>Tabuada do número digitado</Text>
      <Card>
        <Text style = {styles.paragraph}>{text} X 1 = {text * 0}</Text>
        <Text style = {styles.paragraph}>{text} X 1 = {text * 1}</Text>
        <Text style = {styles.paragraph}>{text} X 2 = {text * 2}</Text>
        <Text style = {styles.paragraph}>{text} X 3 = {text * 3}</Text>
        <Text style = {styles.paragraph}>{text} X 4 = {text * 4}</Text>
        <Text style = {styles.paragraph}>{text} X 5 = {text * 5}</Text>
        <Text style = {styles.paragraph}>{text} X 6 = {text * 6}</Text>
        <Text style = {styles.paragraph}>{text} X 7 = {text * 7}</Text>
        <Text style = {styles.paragraph}>{text} X 8 = {text * 8}</Text>
        <Text style = {styles.paragraph}>{text} X 9 = {text * 9}</Text>
        <Text style = {styles.paragraph}>{text} X 10 = {text * 10}</Text>
      </Card>
    </ScrollView>
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
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
