import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFF',
    },
    logoContainer: {
        marginTop: 20,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
       height: 135,
       width: 250,
       marginBottom: 15
    },
    textContainer: {
        paddingHorizontal: 30,
        marginBottom: 40,
        marginTop: 10
    },
    topText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#22215B'
    },
    tittleText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#22215B'
    },
    descriptionText: {
        color: '#7B7F9E',
        maxWidth: '62%'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginBottom: 22
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
    registerButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#000',
        paddingHorizontal: 25
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

})