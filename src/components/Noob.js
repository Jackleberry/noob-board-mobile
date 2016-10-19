import React, { Component } from 'react';
import { bindActionCreators }  from 'redux';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as noobActions from '../actions/noob';
import isEmpty from 'lodash/isEmpty';

class Noob extends Component {

  componentWillMount() {
    if (!isEmpty(this.props.id)) {
      if (this.props.id != this.props.noob.id) {
        this.props.actions.loadNoob();
      }
      this.props.actions.loadNoob(this.props.id);
    }
  }

  render() {
    const { noob, actions } = this.props;

    if (isEmpty(noob)) {
      return (
            <ActivityIndicator
              animating={true}
              size="large"
              style={styles.activityIndicator}/>
        );
    }

    const { id, noobPoints, assassinPoints } = noob;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.pointsTouch}
          onPress={() => actions.addNoobPoint(id)}
        >
        <View style={styles.pointsContainer}>
            <Icon name="reddit-alien" size={40} color="#228b22"  />
            <Text style={[styles.points, styles.noob]}>
              {noobPoints}
            </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointsTouch}
          onPress={() => actions.addAssassinPoint(id)}
        >
        <View style={styles.pointsContainer}>
            <Icon name="gitlab" size={60} color="#191970" />
            <Text style={[styles.points, styles.assassin]}>
              {assassinPoints}
            </Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    noob: state.noob
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(noobActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Noob);

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 65,
  },
  pointsTouch: {
    flex: 1,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pointsContainer: {
    flex: 1,
    height: 150,
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noob: {
    color: '#228b22',
  },
  assassin: {
    color: '#191970'
  },
  points: {
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: '#228b22',
    textShadowRadius: 1,
    textShadowOffset: {width: 1, height: 1},
  },
  icon: {
    padding: 20
  }
});


