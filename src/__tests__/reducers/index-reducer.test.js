import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import selectedParkReducer from '../../reducers/selected-park-reducer'
import parksReducer from '../../reducers/parks-reducer'

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      parksAPICall: {
        isLoading: false,
        parks: [],
        error: null
      },
      selectedPark: {}
    });
  });

});