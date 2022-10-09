import { Button, View, Text, TextInput } from 'react-native';
import React, { Component } from "react";
import { styles } from "../style/Style";

export default class HomeScreen extends Component {
    constructor({ route, navigation }){
        super();
        this.state = {
            navigation: navigation,
            nomeUsuario: "",
        }
    }


    render(){
        console.log(this.state.nomeUsuario)
        
        return (
            <View style={styles.container}>
              <Text>{this.state.nomeUsuario}</Text>
              <TextInput
                placeholder="Nome"
                onChangeText={(nomeUsuario) => this.setState({nomeUsuario})}
                />
              <Button
                title="mudar para tela 2"
                onPress={ () => this.state.navigation.navigate('SecondScreen',
                {
                    nomeUsuario: this.state.nomeUsuario
                }
                
                ) }
              />
        
            </View>
        );
    }
}
