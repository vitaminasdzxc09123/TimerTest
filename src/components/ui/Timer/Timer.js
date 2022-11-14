import React       from 'react';
import {Text,View} from 'react-native';

import PropTypes   from 'prop-types';

import styles      from './styles';

 function Timer({ transformMinutes , transformSeconds }){
    return(
        <View style = {styles.container}>
            <Text style = {styles.time}>
                {transformMinutes || '00'}: 
                <Text>{transformSeconds || '00'}</Text>
            </Text>
        </View>
    )
}
Timer.propTypes = {
    transformMinutes : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    transformSeconds : PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
};

Timer.defaultProps = {
    titransformMinutesme : 0,
    transformSeconds     : 0
};

export default React.memo(Timer)