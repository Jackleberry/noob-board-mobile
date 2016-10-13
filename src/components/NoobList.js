import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import NoobRow from './NoobRow';
import { bindActionCreators } from 'redux';
import * as noobsActions from '../actions/noobs';
import * as noobActions from '../actions/noob';

class NoobList extends Component {

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
            id={noob.id}
            noobPoints={noob.noobPoints}
            assassinPoints={noob.assassinPoints}
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
  listing: {
    flex: 2,
    backgroundColor: 'mediumaquamarine',
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
