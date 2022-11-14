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
      width           : '60%',
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
    title: {
       marginBottom : 20 
    },
    inputModal : {
      width        : '100%',
      height       : 40,
      borderWidth  : 1,
      borderColor: colors.BORDER_INPUT_MODAL,
      borderRadius : 12,
      padding      : 8
    },
    button : {
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