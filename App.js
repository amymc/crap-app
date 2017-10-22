import React from 'react';
//import ReactNativeComponentTree from 'react-native/Libraries/Renderer/shims/ReactNativeComponentTree';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      badPressStatus: false,
      goodPressStatus: false
    };
  }

  onPress = (type) => {
    if (type === 'good') {
      this.setState({ goodPressStatus: true });
      setTimeout(() => {
        this.setState({ goodPressStatus: false });
      }, 200);
    } else {
      this.setState({ badPressStatus: true });
      setTimeout(() => {
        this.setState({ badPressStatus: false });
      }, 200);
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.onPress('good')} style={ this.state.goodPressStatus ? styles.buttonActive : styles.button }> 
          <Text style={ styles.buttonText }> Good day 😀 </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.onPress('bad')} style={ this.state.badPressStatus ? styles.buttonActive : styles.button }> 
          <Text style={ styles.buttonText }> Bad day 💩 </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#222',
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
    marginTop: 30,
    width: 150,
    backgroundColor: '#fff',
    shadowColor: '#222',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
  },
  buttonActive: {
    borderColor: '#222',
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
    marginTop: 30,
    width: 150,
    shadowColor: '#222',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    backgroundColor: '#83ffcd',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
