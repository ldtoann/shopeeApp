import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const CustomAlert = ({visible, message, onClose}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalCloseButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
