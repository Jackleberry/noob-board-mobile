import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Noob from './Noob';
import { bindActionCreators } from 'redux';
import * as noobsActions from '../actions/noobs';

class NoobList extends Component {

  constructor(props) {
    super(props);

    // fetch('http://localhost:3002/api/noobs')
    // .then((response) => {
    //   if (response.status != 200) {
    //     throw error("Did not receive 200 status code back.")
    //   }
    //   return response.json()
    // })
    // .then((jsonResponse) => {
    //   this.setState({noobs: jsonResponse});
    // })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  componentWillMount() {
    this.props.actions.fetchNoobs();
  }

  render() {
    return (
      <ScrollView style={styles.listing}>
        {this.props.noobs.map(noob =>
          <Noob
            key={noob.id}
            noobPoints={noob.noobPoints}
            assassinPoints={noob.assassinPoints}
          >{noob.name}</Noob>)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listing: {
    flex: 2,
    backgroundColor: 'mediumaquamarine',
    paddingBottom: 5
  }
});

const mapStateToProps = (state) => {
  return {
    noobs: state.noobs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(noobsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoobList);
