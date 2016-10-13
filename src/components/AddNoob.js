import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import * as noobActions from '../actions/noob';
import { bindActionCreators } from 'redux';

class AddNoob extends Component {

  render() {
    const { actions, addNoobText } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          refs="noobInput"
          style={styles.input}
          placeholder="Who is this noob?"
          value={addNoobText}
          onChangeText={text => actions.addNoobTextChange(text)}
        />
        <TouchableHighlight onPress={() => {
          actions.addNoob(addNoobText);
          actions.addNoobTextChange('');
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'pink',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    padding: 5,
    backgroundColor: 'lightpink'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    backgroundColor: 'lightcoral',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightpink',
    textShadowColor: 'lightpink',
    textShadowRadius: 2,
    textShadowOffset: {width: 1, height: 1}
  }
});

const mapStateToProps = (state) => {
  return {
    addNoobText: state.addNoobText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(noobActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNoob);
