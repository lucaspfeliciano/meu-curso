import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    
   container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
    paddingTop: Constants.statusBarHeight + 20,
   },

   header: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      marginBottom: 30,
      borderBottomColor: '#567DF4',
      borderBottomWidth: 1
   },

   a1: {
    width: 30
   },

    headerText: {
        fontSize: 22,
        color: '#567DF4',
        textAlign: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: '#567DF4',
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: '#f0f0f0',
        height: 50,
        marginBottom: 20,
        borderRadius: 10
    },

    submitButton: {
        height: 50,
        backgroundColor: '#567DF4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonText: {
        color: '#FFF'
    },

    tittleText: {
        fontWeight: "bold",
        fontSize: 26,
        marginBottom: 10,
        color: '#22215B',
        marginBottom: 10,
    },

    descriptionText: {
        color: '#7B7F9E',
        maxWidth: '62%',
        marginBottom: 24
    },

    form: {
        marginBottom: 30,
        justifyContent: 'center',
    },

    logoView: {
        width: '100%',
        alignItems: 'center'
    },

    logo: {
        width: 200,
        height: 108
    }
})