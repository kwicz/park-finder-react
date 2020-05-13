import * as c from './ActionTypes';

export const requestParks = () => ({
  type: c.REQUEST_PARKS
});

export const getParksSuccess = (parks) => ({
  type: c.GET_PARKS_SUCCESS,
  parks
});

export const getParksFailure = (error) => ({
  type: c.GET_PARKS_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestParks);
    return fetch(`http://localhost:5000/api/parks/`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getParksSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getParksFailure(error));
      });
  }
}

export const selectedPark = (park) => {
  const { name, location, description, area, dateEstablished, id } = park;
  return {
    type: c.SELECTED_PARK,
    name: name,
    location: location,
    dateEstablished: dateEstablished,
    area: area,
    description: description,
    id: id
  }
};