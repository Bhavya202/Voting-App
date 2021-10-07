import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class VoteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      AjP: 0,
      BjP: 0,
      InC: 0,
      Ss_: 0,
    };
  }

  AjpParty = () => {
    var ajp = db.ref('Parties' + '/');
    ajp.update({
      AJP: this.state.AjP + 1,
    });
  };

  BjpParty = () => {
    var bjp = db.ref('Parties' + '/');
    bjp.update({
      BJP: this.state.BjP + 1,
    });
  };

  IncParty = () => {
    var inc = db.ref('Parties' + '/');
    inc.update({
      INC: this.state.InC + 1,
    });
  };

  SsParty = () => {
    var ss = db.ref('Parties' + '/');
    ss.update({
      SS: this.state.Ss_ + 1,
    });
  };

  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageIcon}
            source={require('../assets/TeamImage.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.voteText}>Cast Vote Here</Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              this.props.navigation.navigate('EndScreen')
              this.setState({ AjP: this.state.AjP + 1 });
              this.AjpParty();
            }}>
            <Text style={styles.btntext}>Aam Janta Party</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              this.props.navigation.navigate('EndScreen')
              this.setState({ BjP: this.state.BjP + 1 });
              this.BjpParty();
            }}>
            <Text style={styles.btntext}>Bharatiya Janata Party</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              this.props.navigation.navigate('EndScreen')
              this.setState({ InC: this.state.InC + 1 });
              this.IncParty();
            }}>
            <Text style={styles.btntext}>Indian National Congress</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              this.props.navigation.navigate('EndScreen')
              this.setState({ Ss_: this.state.Ss_ + 1 });
              this.SsParty();
            }}>
            <Text style={styles.btntext}>Shiv Sena</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  imageIcon: {
    width: 300,
    height: 250,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  voteText: {
    color: 'white',
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 500,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  buttons: {
    background: 'linear-gradient(to bottom, #ff9966, #ff5e62)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 20,
    width: 250,
    height: 50,
  },
  btntext: {
    color: 'white',
    fontSize: 17.5,
    fontWeight: 400,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
