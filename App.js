import React, {Component} from 'react';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '~/core/adapter/redux/reducer';
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;
