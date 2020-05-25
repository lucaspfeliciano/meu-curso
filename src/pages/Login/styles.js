import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFF',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
       height: 150,
       width: 300,
       marginBottom: 15
    },
    textContainer: {
        paddingHorizontal: 30,
        marginBottom: 20
    },
    topText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#29808e'
    },
    tittleText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#29808e'
    },
    descriptionText: {
        color: '#7B7F9E',
        maxWidth: '62%'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
        marginBottom: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#29808e',
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: '#f0f0f0',
        height: 44,
        marginBottom: 20,
        borderRadius: 10
    },
    submitButton: {
        height: 42,
        backgroundColor: '#29808e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF'
    },
    registerButton: {
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#db433a'
    }

})