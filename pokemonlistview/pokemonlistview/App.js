import * as React from 'react';
import { Text, View, StyleSheet,FlatList, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  pokemons = [
          {key: 'Ditto', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'},
          {key: 'Pikachu', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
          {key: 'bulbasaur', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
          {key: 'ivysaur', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
          {key: 'venusaur', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'},
          {key: 'charmander', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
          {key: 'charmeleon', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'},
          {key: 'charizard', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
          {key: 'squirtle', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
          {key: 'wartortle', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'},
          {key: 'blastoise', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'},
          {key: 'caterpie', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'},
          {key: 'metapod', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'},
        ];
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Lista de Pokémons
      </Text>
      <FlatList
        data={pokemons}
        renderItem={({item}) => 
          <View style={{flexDirection: "row", padding:3}}>
            <Image style={styles.tinyLogo} source={{uri:item.photo}} />
            <Text>{item.key}</Text>
          </View>
        }>
      </FlatList>
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
