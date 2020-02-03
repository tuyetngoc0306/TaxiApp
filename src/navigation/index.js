import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoginNavigator from './login';
const RootNavigator = createSwitchNavigator({
  LoginNavigator,
  // TabNavigator,
});
export default createAppContainer(RootNavigator);
