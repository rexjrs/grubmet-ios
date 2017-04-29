import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Header from './Header/Header';

export default class Reservations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerTitle: "Reservations"
        };
    }

    render () {
        return (
            <View>
                <Header headerTitle={this.state.headerTitle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});