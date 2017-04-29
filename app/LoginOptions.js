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

export default class LoginOptions extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    back(){
        this.props.navigator.pop();
    }

    signIn(){
        this.props.navigator.replace({id: 'home'});
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.back.bind(this)} style={styles.back}>
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                </View>
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
                            onPress={this.signIn.bind(this)}
                            raised
                            title='SIGN IN'
                            backgroundColor="white"
                            color="#3cb963"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Button
                            raised
                            title='GOOGLE'
                            backgroundColor="white"
                            color="#3cb963"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Button
                            raised
                            title='FACEBOOK'
                            backgroundColor="white"
                            color="#3cb963"
                        />
                    </TouchableOpacity>
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
    back: {
        padding: 15,
    },
    backContainer: {
        position: "absolute",
        top: 20,
        left: 0
    },
    backText: {
        color: "white"
    },
    headers: {
        color: "white",
        marginLeft: 15
    },
    button: {
        marginTop: 10,
        width: window.width* 0.8
    },
    inputContainer: {
        borderBottomWidth: 1,
        marginHorizontal: 15,
        borderColor: "white"
    },
    input: {
        height: 30,
    },
});