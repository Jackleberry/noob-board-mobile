import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import NoobRow from './NoobRow';
import { bindActionCreators } from 'redux';
import * as noobsActions from '../actions/noobs';
import * as noobActions from '../actions/noob';
import isEmpty from 'lodash/isEmpty';

class NoobList extends Component {

  componentWillMount() {
    this.props.actions.fetchNoobs();
  }

  render() {
    if (isEmpty(this.props.noobs)) {
      return (
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.activityIndicator}/>
      );
    }

    const { addNoobPoint, addAssassinPoint } = this.props.noobActions;
    return (
      <ScrollView style={styles.listing}>
        {this.props.noobs.map(noob =>
          <NoobRow
            key={noob.id}
            noob={noob}
            addNoobPoint={() => addNoobPoint(noob.id)}
            addAssassinPoint={() => addAssassinPoint(noob.id)}
            navigator={this.props.navigator}
          >{noob.name}</NoobRow>)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 2
  },
  listing: {
    flex: 2,
    paddingBottom: 5
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    noobs: state.noobs,
    navigator: ownProps.navigator
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(noobsActions, dispatch),
    noobActions: bindActionCreators(noobActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoobList);
