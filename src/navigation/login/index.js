import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '~/screens/splash';
const LoginNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
  },
  // {
  //   initialRouteName: 'SplashScreens',
  //   headerMode: 'none',
  // },
);

export default LoginNavigator;
