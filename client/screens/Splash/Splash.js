import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SplashButton from '../../components/SplashButton/SplashButton';

class Splash extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none',
        },
    }
    constructor() {
        super();
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
        const { navigate } = this.props.navigation;
        if(nextProps.auth.isAuthenticated) {
            navigate('Welcome')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.logoBegin} ></Text><Text style={styles.logoEnd}>Test</Text>
                </View>
                <SplashButton style={styles.signUp} title="SIGN UP" onPress={() => navigate('Register')}/>
                <SplashButton title="LOG IN" onPress={() => navigate('Login')}/>
                <Button onPress={() => navigate('Login')} title="Login As Guest" color="#4da6ff"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0066ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoBegin: {
        fontSize:50,
        fontWeight: '300',
        color: 'white',
    },
    logoEnd: {
        fontSize:50,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 150
    },
    signUp: {
        borderColor: 'white',
        borderWidth: 1,
        width: 300,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginBottom: 20
    }
});

Splash.propTypes = {
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(Splash);
