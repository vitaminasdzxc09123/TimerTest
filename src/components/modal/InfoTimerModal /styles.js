import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
      flex           : 1,
      justifyContent : "center",
      alignItems     : "center",
    },
    modalContent: {
      width           : '80%',
      padding         : 20,
      backgroundColor : "white",
      borderRadius    : 20,
      alignItems      : "center",
      shadowColor     : "#000",
      shadowOffset : {
        width  : 0,
        height : 2
      },
      shadowOpacity   : 0.25,
      shadowRadius    : 4,
      elevation       : 5
    },
    infoContainer: {
      width:'100%',
    },
    title: {
       marginBottom : 20 
    },
    button : {
      width        : '70%',
      borderRadius : 20,
      padding      : 10,
      elevation    : 2
    },
    buttonClose : {
      marginTop       : 20,
      backgroundColor : colors.MODAL_BUTTON,
    },
    textStyle : {
      color      : "white",
      fontWeight : "bold",
      textAlign  : "center"
    },
    modalText : {
      marginBottom : 15,
      textAlign    : "center"
    }
  });

  export default styles