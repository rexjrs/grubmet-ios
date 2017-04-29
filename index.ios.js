import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import Home from './app/Home';

export default class grubmetapp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    
    renderScene(route, navigator){
        switch(route.id){
            case 'home':
            return (<Home navigator={navigator} route={route} title="Home Page"/>)
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id: 'home'}}
                renderScene={this.renderScene}
            />
        );
    }
}

const styles = StyleSheet.create({

});

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);
    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};

AppRegistry.registerComponent('grubmetapp', () => grubmetapp);
