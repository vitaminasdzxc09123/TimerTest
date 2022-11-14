import React     from "react";
import { View }  from "react-native";
import PropTypes from 'prop-types';


import Controls  from '../Controler'
import Timer     from '../Timer'

import styles    from "./styles";

function HeaderMainTimer ({
    status,
    handleStart,
    handlePause,
    handleStop,
    transformMinutes,
    transformSeconds,
}) {

    return (
        <View style = {styles.timeContainer}>
        <Controls
            status      = {status}
            handleStart = {handleStart}
            handlePause = {handlePause}
            handleStop  = {handleStop}
        />
        <Timer 
           transformMinutes = {transformMinutes}
           transformSeconds = {transformSeconds}
           />
     </View> 
    )
}

HeaderMainTimer.propTypes = {
    status           : PropTypes.number,
    handleStart      : PropTypes.func,
    handleStop       : PropTypes.func,
    handlePause      : PropTypes.func,
    transformMinutes : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    transformSeconds : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
};

HeaderMainTimer.defaultProps = {
    status               : 0,
    handleStart          : ()=>{},
    handleStop           : ()=>{},
    handlePause          : ()=>{},
    titransformMinutesme : 0,
    transformSeconds     : 0
};


export default React.memo(HeaderMainTimer)