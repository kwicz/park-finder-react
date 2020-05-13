import selectedParkReducer from '../../reducers/selected-park-reducer'
import * as c from '../../actions/ActionTypes';

describe('selectedParkReducer', () => {

  let action;
  const defaultState = {
    isLoading: false,
    parks: [],
    error: null,
    selectedPark: {}
  };
  const parkData = {
    name: "Acadia",
    location: "Maine",
    dateEstablished: "idunno",
    area: "something",
    description: "zakk's mom likes it.",
    id: 1
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(selectedParkReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        parks: [],
        error: null,
        selectedPark: {}
      }
    );
  });
  
  test('Should return selected park from state', () => {
    const { name, location, description, dateEstablished, area, id } = parkData;
    action = {
      type: 'SELECTED_PARK',
      name: name,
      location: location,
      description: description,
      dateEstablished: dateEstablished,
      area: area,
      id: id
    };

    expect(selectedParkReducer(null, action)).toEqual({
      name: name,
      location: location,
      description: description,
      dateEstablished: dateEstablished,
      area: area,
      id: id
    });
  });
});
  