import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerTitle: this.props.headerTitle
        };
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Text style={styles.headerText}>{this.state.headerTitle}</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        height: 65,
        backgroundColor: "#3cb963",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        color: "white",
        fontWeight: "600",
        fontSize: 15
    }
});