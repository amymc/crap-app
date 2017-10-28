import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Form from './Form';
import Selection from './Selection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showForm: false
    };
  }

  onPress = () => {
    setTimeout(() => {
      this.setState({ showForm: true });
    }, 300);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showForm ?
          <Form /> :
          <Selection onPress={this.onPress} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
