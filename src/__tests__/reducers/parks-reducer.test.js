import parksReducer from '../../reducers/parks-Reducer';
import * as c from '../../actions/ActionTypes';

describe('parksReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    parks: [],
    error: null,
    selectedPark: null
  };

  const loadingState = {
    isLoading: false,
    parks: [],
    error: null,
    selectedPark: null
  };

  test('should successfully return default state if no action is passed to it', () => {
    expect(parksReducer(defaultState, {type:null})).toEqual(
      {
      isLoading: false,
      parks: [],
      error: null,
      selectedPark: null
      }
    );
  });

  test('should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_PARKS
    };

    expect(parksReducer(defaultState, action)).toEqual({
      isLoading: true,
      parks: [],
      error: null,
      selectedPark: null
    });
  });

  test('failing to get parks should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_PARKS_FAILURE,
      error
    };

    expect(parksReducer(loadingState, action)).toEqual({
      isLoading: false,
      parks: [],
      error: "An error",
      selectedPark: null
    });
  });

});