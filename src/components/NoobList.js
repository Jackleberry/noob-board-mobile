import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Noob from './Noob';

class NoobList extends Component {

  constructor(props) {
    super(props);

    this.state = {noobs: []};

    fetch('https://pure-crag-60488.herokuapp.com/noobs')
    .then((response) => {
      if (response.status != 200) {
        throw error("Did not receive 200 status code back.")
      }
      return response.json()
    })
    .then((jsonResponse) => {
      this.setState({noobs: jsonResponse});
    })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{padding: 20}}>
        {this.state.noobs.map(noob =>
          <Noob
            key={noob._id}
            noobPoints={noob.noobPoints}
            assassinPoints={noob.assassinPoints}
          >{noob.name}</Noob>)
        }
      </View>
    );
  }
}

export default NoobList;
