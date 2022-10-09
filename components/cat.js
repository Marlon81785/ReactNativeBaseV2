import React, { Component }from 'react';
import { Text, View } from 'react-native';

//meu primeiro componente react
export default class Cat extends Component {
    constructor(props){
        super();
        this.state = {
            catName: props.name
        }


    }
    render(){
        return(
            <View>
                <Text>Hello, I am your cat! my name is: {this.state.catName}</Text>
            </View>
        );
    }
}

