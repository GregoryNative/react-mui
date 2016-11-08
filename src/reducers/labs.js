import * as ActionTypes from '../actions/labs';

const initialState = {
  items: [
    {
      name: 'Я',
      goal: 'Need to blablab'
    },
    {
      name: 'Тебя',
      goal: 'Need to 2  blablab'
    },
    {
      name: 'Люблю',
      goal: 'Need to 3  blablab'
    }
  ]
};

function labs(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.ADD_ITEM:
    return { items: state.items.concat(action.item) };
  default:
    return state;
  }
}

export default labs;
