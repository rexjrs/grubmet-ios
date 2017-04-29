import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Header from './Header/Header';
import ImagePicker from 'react-native-image-crop-picker';

export default class MyPops extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            headerTitle: "My Pops"
        };
    }
    getImage(){
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

    render () {
        return (
            <View>
                <Header headerTitle={this.state.headerTitle}/>
                <TouchableOpacity onPress={this.getImage.bind(this)}>
                    <Text>GetImage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});