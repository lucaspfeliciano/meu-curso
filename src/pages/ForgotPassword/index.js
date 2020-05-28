import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import logo from '../../assets/logo.png'

export default function ForgotPassword() {
  
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack()
 }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={30} color="#567DF4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Meu Curso</Text>
        <View style={styles.a1}></View>                 
      </View>


      <View style={styles.form}>
      <Text style={styles.tittleText}>RECUPERAR SENHA</Text>
      <Text style={styles.descriptionText}>Será enviado um e-mail para a recuperação de senha.</Text>
                              
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

          <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Recuperar senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo} />
        </View>
        
    </KeyboardAvoidingView>
  ) 
}