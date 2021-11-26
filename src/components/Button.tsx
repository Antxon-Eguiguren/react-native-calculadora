import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  btnEstirado?: boolean;
  accion: (numero: string) => void;
}

export const Button = ({
  text,
  color = '#2D2D2D',
  btnEstirado = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        style={[
          styles.container,
          {backgroundColor: color, width: btnEstirado ? 180 : 80},
        ]}>
        <Text
          style={[
            styles.texto,
            {color: color === '#9B9B9B' ? 'black' : 'white'},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  texto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
  },
});
