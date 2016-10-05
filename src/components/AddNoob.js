import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';

class AddNoob extends Component {

  constructor(props) {
    super(props);

    this.state = {name: ''}
  }

  addNoob() {
    
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Who is this noob?"
          onChangeText={(text) => this.setState({name: text})}
        />
        <TouchableHighlight onPress={this.addNoob}>
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default AddNoob;
