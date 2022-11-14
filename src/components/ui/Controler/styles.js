import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles= StyleSheet.create({
    container : {
        justifyContent : 'space-between',
        flexDirection  : 'row',
    },
    button : {
        marginHorizontal  : 4,
        paddingHorizontal : 5,
        paddingVertical   : 5,
        backgroundColor   : colors.BACKGROUND_TIMER_BUTTON,
        borderRadius      : 5
    },
    buttonText : {
        fontSize   : 20,
        color      : '#FFFF',
        fontWeight : 'bold',
    }
})

export default styles