import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authentication';
import PropTypes from 'prop-types';


import Input from '../../components/Input/Input';
import SplashButton from '../../components/SplashButton/SplashButton';

class Register extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none',
        },
    }
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleSubmit = () => {
        const user = {
            name: this.state.name,
            email: this.state.email.toLowerCase(),
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };
        this.props.registerUser(user);
    }

    render() {
        const  { errors }  = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create account</Text>
                <View style={{width: 300, justifyContent:'flex-start'}}>
                {errors.name ? (
                    <Text style={styles.label}>{errors.name}</Text>
                ) : (
                    <Text style={styles.label}>What's your name?</Text>
                )}
                <Input setText={(name) => {this.setState({name})}} />
                {errors.email ? (
                    <Text style={styles.label}>{errors.email}</Text>
                ) : (
                    <Text style={styles.label}>What's your email?</Text>
                )}
                <Input setText={(email) => {this.setState({email})}} />
                {errors.password ? (
                    <Text style={styles.label}>{errors.password}</Text>
                ) : (
                    <Text style={styles.label}>Pick a password</Text>
                )}
                <Input setText={(password) => {this.setState({password})}} isSecure={true} />
                {errors.password_confirm ? (
                    <Text style={styles.label}>{errors.password_confirm}</Text>
                ) : (
                    <Text style={styles.label}>Confirm password</Text>
                )}
                <Input setText={(password_confirm) => {this.setState({password_confirm})}} isSecure={true} />
                <Text>{"\n"}</Text>
                <SplashButton title="REGISTER" onPress={() => this.handleSubmit()}/>
                </View>
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
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 30
    },
    label: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'white',
        paddingBottom:10
    },
});

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(Register);
