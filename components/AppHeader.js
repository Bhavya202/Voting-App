import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Voting App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    background: 'linear-gradient(to top, #2193b0, #6dd5ed)',
    marginTop: 30,
    borderRadius: 5,
    cursor: 'default',
  },
  text:{
    padding: 20,
    color: 'white',
    fontSize: 22.5,
    fontWeight: 500,
    fontStyle: 'italic',
    textAlign: 'center',
  }
});