import { createSwitchNavigator ,createStackNavigator } from 'react-navigation';
import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Welcome from './screens/Welcome/Welcome';

const AppNavigator = createSwitchNavigator({
    LoggedOut: createStackNavigator({
        Splash: { screen: Splash },
        Login: { screen: Login },
        Register: { screen: Register }
    }),
    LoggedIn : createStackNavigator({
        Welcome: { screen: Welcome }
    })
});

export default AppNavigator;
