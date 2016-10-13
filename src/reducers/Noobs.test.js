import expect from 'expect';
import deepFreeze from 'deep-freeze-es6';
import Noobs from './Noobs';


describe('Noob Reducer', () => {
  let stateBefore = [];
  let stateAfter = [];
  let action = {};
  it('should add a noob when passed ADD_NOOB action', () => {
    stateBefore = [];
    stateAfter = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      }
    ];
    action = {
      type: "ADD_NOOB",
      id: 0,
      name: "Jackie"
    };

    deepFreeze(stateBefore);

    expect(Noobs(stateBefore, action)).toEqual(stateAfter);
  });

  it('should toggle the out of action status of a noob when calling TOGGLE_NOOB', () => {
    stateBefore = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      },
      {
        id: 1,
        name: "Ryan",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      }
    ];
    action = {
      type: "TOGGLE_NOOB",
      id: 1
    };
    stateAfter = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      },
      {
        id: 1,
        name: "Ryan",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: true
      }
    ];

    deepFreeze(stateBefore);

    expect(Noobs(stateBefore, action)).toEqual(stateAfter);
  });

  it('should increment noobPoints by 1 when calling ADD_NOOB_POINT', () => {
    stateBefore = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      },
      {
        id: 1,
        name: "Ryan",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      }
    ];
    action = {
      type: "ADD_NOOB_POINT",
      id: 1
    };
    stateAfter = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      },
      {
        id: 1,
        name: "Ryan",
        noobPoints: 1,
        assassinPoints: 0,
        outOfAction: false
      }
    ];

    deepFreeze(stateBefore);

    expect(Noobs(stateBefore, action)).toEqual(stateAfter);
  });

  it('should increment assassinPoints by 1 when calling ADD_ASSASSIN_POINT', () => {
    stateBefore = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      },
      {
        id: 1,
        name: "Ryan",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      }
    ];
    action = {
      type: "ADD_ASSASSIN_POINT",
      id: 1
    };
    stateAfter = [
      {
        id: 0,
        name: "Jackie",
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      },
      {
        id: 1,
        name: "Ryan",
        noobPoints: 0,
        assassinPoints: 1,
        outOfAction: false
      }
    ];

    deepFreeze(stateBefore);

    expect(Noobs(stateBefore, action)).toEqual(stateAfter);
  });

});
