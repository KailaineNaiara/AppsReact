import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//Páginas do app
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tabuada</Text>
      <Button
        title="Tabuada do 2"
        onPress={() => navigation.navigate('TabuadaDo2')}
      />
       <Button
        title="Tabuada do 3"
        onPress={() => navigation.navigate('TabuadaDo3')}
      />
    </View>
  );
}

function TabuadaDo2() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tabuada do 2</Text>
      <Text style={styles.paragraph}>2 x 1 = 2</Text>
      <Text style={styles.paragraph}>2 x 2 = 4</Text>
      <Text style={styles.paragraph}>2 x 3 = 4</Text>
      <Text style={styles.paragraph}>...</Text>
      <Text style={styles.paragraph}>2 x 10 = 20</Text>
    </View>
  );
}

function TabuadaDo3() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tabuada do 3</Text>
      <Text style={styles.paragraph}>3 x 1 = 3</Text>
      <Text style={styles.paragraph}>3 x 2 = 6</Text>
      <Text style={styles.paragraph}>3 x 3 = 9</Text>
      <Text style={styles.paragraph}>...</Text>
      <Text style={styles.paragraph}>3 x 10 = 30</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'APP Tabuada' }} />
        <Stack.Screen name="TabuadaDo2" component={TabuadaDo2} options={{ title: 'Tabuada do 2'}} />
        <Stack.Screen name="TabuadaDo3" component={TabuadaDo3} options={{ title: 'Tabuada do 3'}} />
      </Stack.Navigator>
    </NavigationContainer>
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
});
