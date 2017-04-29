import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    TextInput
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    signIn(){
        this.props.navigator.push({id: 'loginOptions'});
    }

    render () {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <Text style={styles.headers}>Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <Text style={[styles.headers,{marginTop: 10}]}>Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Button
                            raised
                            title='SIGNUP'
                            backgroundColor="white"
                            color="#3cb963"
                        />
                    </TouchableOpacity>
                    <Text style={styles.alreadyAccount}>Already have an account?</Text>
                    <View style={styles.loginContainer}>
                        <TouchableOpacity onPress={this.signIn.bind(this)} style={styles.loginBtn}>
                            <Text style={styles.loginText}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

var window = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3cb963",
        justifyContent: "center",
        alignItems: "center"
    },
    headers: {
        color: "white",
        marginLeft: 15
    },
    button: {
        marginTop: 10,
        width: window.width* 0.8
    },
    alreadyAccount: {
        color: "white",
        marginLeft: 15,
        marginTop: 5
    },
    inputContainer: {
        borderBottomWidth: 1,
        marginHorizontal: 15,
        borderColor: "white"
    },
    input: {
        height: 30,
    },
    loginBtn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "white"
    },
    loginContainer: {
        width: 100,
        marginLeft: 5,
        marginTop: 5,
        alignItems: "center"
    },
    loginText: {
        color: "#3cb963"
    }
});