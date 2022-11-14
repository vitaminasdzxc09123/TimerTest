import {StyleSheet}   from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        marginTop         : 40,
        flex              : 1,
        paddingHorizontal : 12,
    },
    titleHello: {
        color      : colors.BACKGROUND_HEADER,
        marginTop  : 50,
        alignSelf  : 'center',
        textAlign  : 'center',
        fontWeight : 'bold',
        fontSize   : 20,
    },
    timeContainer: {
        backgroundColor:colors.BACKGROUND_HEADER,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        justifyContent: 'space-between',
        borderRadius  : 12,
        padding       : 16,
        flexDirection : 'row',
        alignItems    : 'center'
    },
    flatlist: {
        marginTop : 20,
    },
  
});
export default styles;
