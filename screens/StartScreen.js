import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class StartScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.container}>
          <Text style={styles.containerText}>
            Vote Your Favourite Political Party Of India. Top 4 Political Party.
            You Will Get A Chance To Vote By Sitting At Home.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageIcon}
            source={require('../assets/icon.png')}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.navigation.navigate('VoteScreen');
          }}>
          <Text style={styles.btnText}>Vote Now!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
    textAlign: 'center',
  },
  containerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400,
    fontStyle: 'italic',
    cursor: 'default',
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 25,
  },
  imageIcon: {
    width: 225,
    height: 225,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 400,
    fontStyle: 'italic',
  },
});

  //code to make db reset when button is pressed
  // resetDb = () => {
  //   var resetDatabase = db.ref('Parties/').set({
  //     'AJP': 0,
  //     'BJP': 0,
  //     'INC': 0,
  //     'SS': 0
  //   });
  // };
  
  // this.resetDb();