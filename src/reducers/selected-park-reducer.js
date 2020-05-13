import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const {name, location, description, area, dateEstablished, id} = action;
  switch(action.type) {
    case c.SELECTED_PARK:
      return Object.assign({}, state, {
        name: name,
        location: location,
        description: description,
        area: area,
        dateEstablished: dateEstablished,
        id: id
      });
  default:
      return state;
  }
}
