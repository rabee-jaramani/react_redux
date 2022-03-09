import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adminReducer, dateReducer } from './reducers';

// step 1
const initialState = {
  admin: {
    name: {
      fname: 'rabee',
      lname: 'aljamani',
    },
    phones: {
      mobile: '0567657124',
      home: '04566548',
    },
    id: '123456',
    address: 'Dubai-Marina',
    cars: ['ferrari'],
  },
  date: '52-01-1999',
};

// step 2 for chrome
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// step 3 combine reducers
const reducer = combineReducers({
  admin: adminReducer,
  date: dateReducer,
});

// step 4 create the store
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
