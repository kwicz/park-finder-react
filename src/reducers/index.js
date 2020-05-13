import selectedParkReducer from './selected-park-reducer';
import parksReducer from './parks-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    parksAPICall: parksReducer,
    selectedPark: selectedParkReducer
});

export default rootReducer;