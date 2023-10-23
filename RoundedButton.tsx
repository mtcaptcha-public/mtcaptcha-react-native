import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define the type for your component's props
interface RoundedButtonProps {
  title: string;
  onPress: () => void;
  buttonColor: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ title, onPress, buttonColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RoundedButton;