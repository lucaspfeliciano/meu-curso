import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import logo from '../../assets/logo.png'
import styles from './styles';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior='position' style={styles.container}>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.topText}>Bem-vindo ao</Text>
          <Text style={styles.tittleText}>Meu Curso</Text>
          <Text style={styles.descriptionText}>Leia relatos de pessoas sobre todos os cursos e descubra com qual você mais se identifica</Text>
        </View>

        <KeyboardAvoidingView style={styles.form}>
          <TextInput
          style={styles.input}
          placeholder="Seu e-Mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          value={email}
          />

          <TextInput
          style={styles.input}
          placeholder="Sua senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          />

          <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
            <Text style={styles.registerButtonText}>Crie uma conta</Text>
          </TouchableOpacity>

    </KeyboardAvoidingView>
  ) 
}