import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import NoobRow from './NoobRow';
import { bindActionCreators } from 'redux';
import * as noobsActions from '../actions/noobs';
import * as noobActions from '../actions/noob';

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
    const { addNoobPoint, addAssassinPoint } = this.props.noobActions;
    return (
      <ScrollView style={styles.listing}>
        {this.props.noobs.map(noob =>
          <NoobRow
            key={noob.id}
            noobPoints={noob.noobPoints}
            assassinPoints={noob.assassinPoints}
            addNoobPoint={() => addNoobPoint(noob.id)}
            addAssassinPoint={() => addAssassinPoint(noob.id)}
          >{noob.name}</NoobRow>)
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
    actions: bindActionCreators(noobsActions, dispatch),
    noobActions: bindActionCreators(noobActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoobList);
