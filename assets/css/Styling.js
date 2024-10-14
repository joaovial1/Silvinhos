import {StyleSheet} from 'react-native';

const Styling = StyleSheet.create({
    container: {
      padding: 10,
      width: '100%',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
    },
    productButton: {
      width: 350,
      height: 45,
      marginVertical: 12,
      backgroundColor: '#661923', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
    },
    MainInterface: {
      alignItems: 'center',
      marginTop: 10,
    },
    productButtonText: {
      color: 'white',
      fontSize: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16
    },
    drawerContainer: {
      flex: 1,
      justifyContent: 'top',
      marginTop: 20,
      padding: 14,
    },
    leftBarButton: {
      width: 250,
      height: 38,
      borderRadius: 10,
      marginBottom: 5, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#661923', 
    },
    leftBarButtonText: {
      color: 'white',
      fontSize: 20,
    },
    searchBar: {
      height: 35,
      width: '100%',
      borderColor: '#646464',
      borderWidth: 1,
      padding: 16,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    image: {
      width: 45,
      height: 45,
      marginLeft:15,
    },
    textTitle:{
      marginTop:8,
      marginBottom: 6,
      fontSize: 14,
      fontWeight:'bold',
    },
    // Styles do Card:
    cardOfWineContainer: {
      flexDirection: 'row', 
      backgroundColor: '#661923',
      marginVertical: 12,
      marginLeft: 25,
      borderRadius: 7,
      alignItems: 'center',
      width: 322, 
      height: 110,
    },
    imageWine: {
      width: 125,
      height: 125,
      borderRadius: 300,
      position: 'absolute', 
      left: -32,
    },
    infoOfWineContainer: {
      marginLeft: 125,
      justifyContent: 'center',
    },
    nameWine: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detailsOfWine: {
      fontSize: 16,
      color: '#DCDCDC',
      marginBottom: 2,
    },
    // MODAL CARDS
    editButton: {
      width: 40, 
      height: 40, 
      borderRadius: 7, 
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 10,
      right: 10,
    },    
    adcImage: {
      width: 45,
      height: 45,
    },
    plusMinusImage: {
      width: 30,
      height: 30,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 350,
      height: 155,
      borderRadius: 7,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 22,
      marginTop: 10,
      marginBottom:10,
      fontWeight: 'bold',
    },
    modalText: {
      fontSize: 18,
    },
    modalButtonContainer: {
      marginTop: 20,
      flexDirection: 'row',
    },
    modalButton: {
      flex: 1,
      width: 100,
      height: 50,
      marginHorizontal: 5,
      backgroundColor: '#661923',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
    },
    modalButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    productContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageUpload: {
      width: 180,
      height: 180,
      borderRadius: 90,
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    productImage: {
      width: '100%',
      height: '100%',
      borderRadius: 90,
    },
    removeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: '#661923',
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    removeButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button:{
      width: 160,
      height:43,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: '#661923',
    },
    input: {
      height: 50,
      width: '65%',
      maxWidth: 400,
      borderColor: '#661923',
      borderWidth: 1,
      marginBottom: 15,
      padding:10,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      textAlign: 'left',
    },
    textArea: {
      width: '65%',
      maxWidth: 400,
      height: 42,
      borderColor: '#661923',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      textAlign: 'left',
      textAlignVertical: 'top',
    },
    textDescriptionArea: {
      width: '65%',
      maxWidth: 400,
      height: 80,
      textAlignVertical: 'top',
      textAlign: 'left', 
      borderColor: '#661923',
      borderWidth: 1,
      marginBottom: 15,
      paddingLeft: 10,
      paddingTop: 10,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
    }
  });

  export default Styling;