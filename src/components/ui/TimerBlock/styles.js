import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
    flatlistBlock: {
        alignItems      : 'center',
        borderWidth     : 1,
        borderColor      : colors.BORDER,
        flexDirection   : 'row',
        justifyContent  : 'space-between',
        padding         : 12,
        borderRadius    : 12,
        backgroundColor : colors.BACKGROUND_FLAT_LIST_BLOCK,
        height          : 50,
        marginBottom    : 12,
    },
    rightContent: {
        flexDirection  :  'row',
        alignItems     :  'center'
    },
    timerContent: {
        flexDirection : 'row',
        alignItems    : 'center',
        marginRight   : 25,
    },
    rightTitle: { 
      fontSize   : 15,
      color      : colors.WHITE,
      fontWeight : 'bold'
    },
    imageBlock: {
        marginRight : 8,
        width       : 25,
        height      : 25
    },
    iconPlayContainer: {
        marginRight : 12
    },
    leftTilteBlock: {
        fontSize   : 15,
        color      : colors.WHITE,
        fontWeight : 'bold'
    }
})
export default styles