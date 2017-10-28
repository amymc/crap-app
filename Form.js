import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  onPress = () => {
    this.setState({ pressStatus: true });
    setTimeout(() => {
      this.setState({ pressStatus: false });
    }, 200);
  }


  render() {
    return (
      <View>
       <Text style={styles.text}> Noteable things </Text>
       <TextInput style={styles.input}
        multiline={true}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
       <TouchableHighlight onPress={() => this.onPress()} style={ this.state.pressStatus ? styles.buttonActive : styles.button }> 
          <Text style={ styles.buttonText }> Save 💾 </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    minHeight: 300,
    minWidth: 250,
    fontSize: 18,
    paddingTop: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingLeft: 6
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
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
  }
  
});
