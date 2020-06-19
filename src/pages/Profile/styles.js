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
       textAlign: "center",
       fontWeight: 'bold'
   },

   profileCard: {
       height: 180,
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
    color: '#22215B'
   },

   taskbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
   },

   taskbarText: {
       fontSize: 18,
       color: '#22215B',
       fontWeight: '500',
       textAlign: 'center',
      marginBottom: 30,
   },

   addReport: {
       flexDirection: 'row',
       alignItems: 'center'
   },

   addReportText: {
    color: '#22215B',
    fontWeight: '500',
    paddingHorizontal: 5
   },

   reportContainer: {
       height: 65,
       flexDirection: 'row',
       backgroundColor: '#E0F2FF',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: 10,
       borderRadius: 8,
       marginBottom: 14

   },

   reportTexts: {
    paddingHorizontal: 25
   },

   reportTitle: {
       color: '#415EB6',
       fontSize: 18,
       fontWeight: '500'
   },

   reportDate: {
    color: '#415EB6',
    fontSize: 14,
}

})