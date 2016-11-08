import * as ActionTypes from '../actions';

const initialState = {
  items: ['example item']
};

export default function list(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.ADD_ITEM:
    return { items: state.items.concat(action.item) };
  default:
    return state;
  }
}

