import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Reducer for displaying all feedback
const displayReducer = (state = [], action) => {
    console.log('In display reducer');
    if ( action.type  === 'GET_FEEDBACK' ) {
    // action payload will be the array of feedback from the database
    return action.payload;
  }
  // For any other action type, just return the current state
  console.log('final state', state);
  return state;
}

//Set feedback as blank before any is entered
const emptyFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}

//reducer to store feedback being entered
const feedbackReducer = (state = emptyFeedback, action) => {
    console.log('In feedback reducer');
    if (action.type === 'ADD_FEEDBACK') {
        //payload will be feedback item to add
        state = {...state, ...action.payload};
    } else if (action.type === 'SUBMIT_FEEDBACK') {
        //reset state for new feedback
        state = emptyFeedback;
    }
}

//set up store
const reduxStore = createStore(
    combineReducers({
      displayReducer,
      feedbackReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
