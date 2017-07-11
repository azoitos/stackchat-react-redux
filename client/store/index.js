import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import the messages sub-reducer
import messages from './messages';
import channelList from './channelList';
import name from './name';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';

const reducer = combineReducers({
  messages,
  channelList,
  name,
  newChannelEntry,
  newMessageEntry
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

export * from './messages';
export * from './channelList';
export * from './name';
export * from './newChannelEntry';
export * from './newMessageEntry';
