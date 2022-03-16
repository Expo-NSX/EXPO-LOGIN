
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../../assets/logo.png')} 
                    style={{ width: '100%' }} 
                    resizeMode="contain" 
                />
            </View>

            <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={600} >
                <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SingIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}