
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import * as Animatable from 'react-native-animatable';

export default function SingIn(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(){
        console.log({ 'email': email, 'senha': senha });
    }

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message} >Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>E-mail</Text>
                <TextInput 
                    placeholder='Digite um email...'
                    style={styles.input}
                    onChangeText={ value => setEmail(value) }
                    value={ email }
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder='Sua senha'
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={ value => setSenha(value) }
                    value={ senha }
                />

                <TouchableOpacity style={styles.button} onPress={ handleLogin } >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastra-se</Text>
                </TouchableOpacity>

            </Animatable.View>         
        </View>
    );
}