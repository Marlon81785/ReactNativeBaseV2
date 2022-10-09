import { Button, View, Text } from 'react-native';
import React, { Component } from 'react';
import MyModal from '../components/mymodal';
import Cat from '../components/cat';

export default class SecondScreen extends Component {
    constructor({ route, navigation }){
        super();
        this.state = {
            navigation: navigation,
        }
    }

    render(){
        return (
            <View>
                <MyModal/>
                <Cat name='Jeremy'/> 

                <Button
                    title='Go back to Home Screen'
                    onPress={()=>this.state.navigation.navigate('Home')}
                ></Button>
            </View>
        );
    }

}
