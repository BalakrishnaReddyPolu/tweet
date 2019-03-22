import { createStore, combineReducers } from 'redux';
import {comments, tweetText} from "./reducers";
const rootReducer = combineReducers({
    comments,
    tweetText
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
