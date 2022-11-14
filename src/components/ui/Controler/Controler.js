import React     from 'react';
import {
     View, 
     Text, 
     Pressable
}                from 'react-native';
import PropTypes from 'prop-types';
import styles    from './styles';

function Controler({
    status,
    handleStart,
    handleStop,
    handlePause
}){
    return (
        <View style = {styles.container}>
        <Pressable
            disabled = {status === 0 || status === 1 }
            style    = {(status === 0 || status === 1 )?{...styles.button,opacity:0.5}:styles.button}
            onPress  = {handleStart}
        >
            <Text style = {styles.buttonText}>Start</Text>
        </Pressable>
        <Pressable
            disabled = { status === -1 }
            style    = {( status === -1 )?{...styles.button,opacity:0.5}:styles.button}
            onPress  = {handlePause}
        >
            <Text style = {styles.buttonText}>
                { status === 0 ? 'Resume' : 'Pause' }
            </Text>
        </Pressable>
        <Pressable
            disabled = { status === -1 }
            style    = {( status === -1 ) ? { ...styles.button , opacity : 0.5 } : styles.button }
            onPress  = {handleStop}
        >
            <Text style = { styles.buttonText }>Stop</Text>
        </Pressable>
    </View>
    )
}
Controler.propTypes = {
    status      : PropTypes.number,
    handleStart : PropTypes.func,
    handleStop  : PropTypes.func,
    handlePause : PropTypes.func,
};

Controler.defaultProps = {
    status      : 0,
    handleStart : ()=>{},
    handleStop  : ()=>{},
    handlePause : ()=>{},
};
export default React.memo(Controler)