import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return {
        ...state,
        latitude: action.payload.currentLatitude,
        longitude: action.payload.currentLongitude,
      };

    default:
      return state;
  }
};

const addLocation = dispatch => (currentLatitude, currentLongitude) => {
  dispatch({
    type: 'add_current_location',
    payload: {currentLatitude, currentLongitude},
  });
};

export const {Context, Provider} = createDataContext(
  locationReducer,
  {addLocation},
  {latitude: 40.73061, longitude: -73.935242},
);
