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
      paddingHorizontal: 20
   },

   headerText: {
       fontSize: 16,
       color: "#22215B",
       textAlign: "center"
   },

   profileCard: {
       height: 200,
       backgroundColor: "#E0F2FF",
       alignItems: 'center',
       justifyContent: 'center',
      marginBottom: 30,
      borderRadius: 20,
   },

   profileImage: {
       height: 75,
       width: 75,
       borderRadius: 100,
       marginBottom: 10
   },

   profileName: {
       fontSize: 18,
       fontWeight: 'bold',
       color: '#22215B',
       marginBottom: 10
   },

   profileCourse: {
    fontSize: 15,
    color: '#22215B',

   }    
})