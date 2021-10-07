import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class EndScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader />
        <View style={styles.container}>
          <Text style={styles.containerText}>Thank You For Voting!!</Text>
          <Text style={styles.containerText}>We Will Vote Again In Next Election!!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.imageIcon} source={require('../assets/vote.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
    textAlign: 'center',
  },
  containerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 23.5,
    fontWeight: 400,
    fontStyle: 'italic',
    textDecoration: 'underline double',
    padding: 20,
    cursor: 'default',
  },
  imageContainer: {
    alignSelf: 'center',
    cursor: 'default',
  },
  imageIcon: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    width: 275,
    height: 150,
    alignSelf: 'center',
  },
});
