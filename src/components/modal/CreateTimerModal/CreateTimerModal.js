import React     from "react";
import PropTypes from 'prop-types';

import {
    Modal,
    Text, 
    Pressable, 
    View, 
    TextInput
}                from "react-native";

import styles    from "./styles";

function CreateTimerModal ({modalVisible,handleSaveTimer,onChangeText,text})  {

  return (
      <Modal
        animationType  = "slide"
        transparent    = {true}
        visible        = {modalVisible}
      >
        <View style = {styles.container}>
          <View style = {styles.modalContent}>
          <Text style = {styles.title}>Add title for timer</Text>
            <TextInput
               placeholder = "Timer titmer"
               maxLength   = {20}
               style       = {styles.inputModal}
               value       = {text}
               onChangeText  = {onChangeText}
            />
            <Pressable
              style   = {[styles.button, styles.buttonClose]}
              onPress = {() => handleSaveTimer(!modalVisible)}
            >
              <Text style = {styles.textStyle}>Save Timer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
   
  );
};

CreateTimerModal.propTypes = {
  text                : PropTypes.string,
  modalVisible        : PropTypes.bool,
  handleSaveTimer     : PropTypes.func,
  onChangeText        : PropTypes.func,
};

CreateTimerModal.defaultProps = {
  text                : '',
  modalVisible        : false,
  handleSaveTimer     : () => {},
  onChangeText        : () => {}
};

export default CreateTimerModal;