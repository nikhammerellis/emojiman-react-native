import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const ModalButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalButtonView}>
        <Text style={styles.modalButtonText}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  modalButtonView: {
    width: 220,
    height: 60,
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#007aff',
  },
  modalButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007aff'
  }
};

export { ModalButton };
