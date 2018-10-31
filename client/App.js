import React from 'react';
import { AsyncStorage } from "react-native"
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';
import store from './store';

import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('jwtToken');
        if (value !== null) {
            NavigationService.navigate('Welcome')
            setAuthToken(value);
            const decoded = jwt_decode(value);
            store.dispatch(setCurrentUser(decoded));

            const currentTime = Date.now() / 1000;
            if(decoded.exp < currentTime) {
                store.dispatch(logoutUser());
            }
        }
    } catch (error) {
        console.log(error)
    }
}

_retrieveData();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <AppNavigator
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
}
