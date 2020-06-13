import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles';
import perfil from '../../assets/perfil.jpg';

export default function Profile() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu perfil</Text>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="more-horizontal" size={26} color="#22215B" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <Image source={perfil} style={styles.profileImage}/>
        <Text style={styles.profileName}>Lucas Feliciano</Text>
        <Text style={styles.profileCourse}>Sistemas de Informação</Text>
      </View>
    </ScrollView>
  ) 
}