import React     from "react";
import PropTypes from 'prop-types';
import { 
    Modal,
    Text,
    Pressable, 
    View 
  }             from "react-native";

import styles   from "./styles";

function InfoTimerModal ({ modalVisible , setIsModalInfoTimer , data })  {

  return (
      <Modal
        animationType  = "slide"
        transparent    = {true}
        visible        = {modalVisible}
      >
        <View style = {styles.container}>
          <View style = {styles.modalContent}>
          <Text style = {styles.title}>Timer information</Text>
          <View style = {styles.infoContainer}>
            <Text style = {styles.title}>Name : {data.title} </Text>
            <Text style = {styles.title}>Date created : {data.dateCreated} </Text>
          </View>
            <Pressable
              style   = {[styles.button, styles.buttonClose]}
              onPress = {() => setIsModalInfoTimer(!modalVisible)}
            >
              <Text style = {styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
   
  );
};

InfoTimerModal.propTypes = {
  data                : PropTypes.object,
  modalVisible        : PropTypes.bool,
  setIsModalInfoTimer : PropTypes.func
};

InfoTimerModal.defaultProps = {
  data                : {},
  modalVisible        : false,
  setIsModalInfoTimer : () => {}
};

export default InfoTimerModal;