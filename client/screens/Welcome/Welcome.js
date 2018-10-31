import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication';

class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
        },
    }
    constructor() {
        super();
        this.state = {
        }
    }

    logout = () => {
        this.props.logoutUser();
    }

    render() {
        console.log(this.props);
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Welcome</Text>
                <Button title="Logout" onPress={this.logout} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

Welcome.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Welcome);
