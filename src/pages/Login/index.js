import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png'
import styles from './styles';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register')
}

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword')
}

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.topText}>Bem-vindo ao</Text>
          <Text style={styles.tittleText}>Meu Curso</Text>
          <Text style={styles.descriptionText}>Leia relatos de pessoas sobre todos os cursos para ajudar a escolher o seu.</Text>
        </View>

        <View style={styles.form}>
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
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.registerButton} onPress={navigateToRegister}>
              <Text style={styles.registerButtonText}>Criar nova conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={navigateToForgotPassword}>
              <Text style={styles.registerButtonText}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View> 

        <View style={styles.logoContainer}>
          <Image source={logoImg} style={styles.logo}/>
        </View>

    </KeyboardAvoidingView>
  ) 
}