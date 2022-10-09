import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class MyModal extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <TouchableOpacity 
            style={{
                padding: 40,
                margin: 50,
                backgroundColor: 'skyblue',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderRadius: 10
            }}>
                <Text style={{ color: 'blue' }}>MyModal Component</Text>
            </TouchableOpacity>
            
        );
    }
    


}





