import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles';
import perfil from '../../assets/perfil.jpg';

export default function Profile() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
    
      <Text style={styles.taskbarText}>Meus relatos</Text>

      <FlatList 
          data={[1, 2]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => ( <TouchableOpacity onPress={() => {}}>
          <View key={item} style={styles.reportContainer}>
            <Feather name="folder" size={32} color="#415EB6" />
            <View style={styles.reportTexts}>
              <Text style={styles.reportTitle}>Sistemas de Informação</Text>
              <Text style={styles.reportDate}>Maio de 2020</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Feather name="more-vertical" size={26} color="#22215B" />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>)}
          />
    </View>
  ) 
}