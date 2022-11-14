import React                 from "react";
import { Image, Text, View } from "react-native";
import PropTypes             from 'prop-types';

import image                 from '../../../assets/images/timer.png'
import PlayIcon              from '../../../assets/icons/PlayIcon'
import AnimatedPress         from "../../base/AnimatedPress";

import styles                from "./styles";

function TimerBlock ({ handleChooseTimer , item ,handleGetInfoTimer }) {

    return (
     <AnimatedPress 
          onPress = { () => handleGetInfoTimer(item)}
          style   = {styles.flatlistBlock}>

       <Text style = {styles.leftTilteBlock}>
           {item.title}
        </Text>
       <View style = {styles.rightContent}>
        <View style = {styles.timerContent} > 
        <Image 
             style  = {styles.imageBlock}
             source = {image} />
        <Text style = {styles.rightTitle}>
            {item.min}:
         </Text>
        <Text style = {styles.rightTitle}>
            {item.sec}
          </Text>
      </View>
       <AnimatedPress
          onPress = {() => handleChooseTimer(item)}
          style   = {styles.iconPlayContainer}>
            <PlayIcon/>
        </AnimatedPress>
        </View>
    </AnimatedPress>
    )
}

TimerBlock.propTypes = {
    handleChooseTimer : PropTypes.func,
    item              : PropTypes.object
};

TimerBlock.defaultProps = {
    item              : {},
    handleChooseTimer : () => {}
};

export default React.memo(TimerBlock)