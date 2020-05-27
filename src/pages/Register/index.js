import React, {useState} from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import logo from '../../assets/logo.png'


export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack()
 }

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={30} color="#567DF4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Meu Curso</Text>
        <View style={styles.a1}></View>                 
      </View>


      <View style={styles.form}>
      <Text style={styles.tittleText}>CRIE SUA CONTA</Text>
      <Text style={styles.descriptionText}>Descubra o seu curso ou ajude outras pessoas a descobrirem.</Text>
                              
          <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={text => setName(text)}
          value={name}
          />

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
            <Text style={styles.buttonText}>Cadastra-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoView}>
        <Image source={logo} style={styles.logo} />
        </View>
        
    </KeyboardAvoidingView>
  ) 
}