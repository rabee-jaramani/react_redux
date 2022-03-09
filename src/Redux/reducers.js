import { ADD_CAR, UPDATE_ADMIN, UPDATE_DATE } from './constants';

export const adminReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ADMIN:
      // here no append because we need to update (remove old and update)
      return action.payload;
    case ADD_CAR:
      // to append: add the whole state, then the array name then
      // ...state.array name even if its under admin doesnot matter in which layer
      return { ...state, cars: [...state.cars, action.payload] };
    default:
      return state;
  }
};

export const dateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return action.payload;
    default:
      return state;
  }
};
