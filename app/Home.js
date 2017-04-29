import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import TabBar from './Global/TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import PopUps from './Tabs/PopUps';
import Reservations from './Tabs/Reservations';
import MyPopUps from './Tabs/MyPopUps';
import More from './Tabs/More';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    render () {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <TabBar />}
                tabBarPosition="bottom"
            >
                <ScrollView tabLabel="ios-home">
                    <PopUps />
                </ScrollView>
                <ScrollView tabLabel="ios-cart">
                    <Reservations />
                </ScrollView>
                <ScrollView tabLabel="ios-wine">
                    <MyPopUps />
                </ScrollView>
                <ScrollView tabLabel="ios-more">
                    <More />
                </ScrollView>
            </ScrollableTabView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});