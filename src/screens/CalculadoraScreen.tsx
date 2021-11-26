import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

import {Button} from '../components/Button';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    resultado,
    subResultado,
    limpiar,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    btnDelete,
    calcular,
    togglePositivoNegativo,
    generarNumero,
  } = useCalculadora();

  return (
    <View style={styles.container}>
      {subResultado !== '0' && (
        <Text style={styles.subResultado}>{subResultado}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {resultado}
      </Text>
      <View style={styles.fila}>
        <Button text="C" color="#9B9B9B" accion={limpiar} />
        <Button text="+/-" color="#9B9B9B" accion={togglePositivoNegativo} />
        <Button text="del" color="#9B9B9B" accion={btnDelete} />
        <Button text="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <Button text="7" accion={generarNumero} />
        <Button text="8" accion={generarNumero} />
        <Button text="9" accion={generarNumero} />
        <Button text="x" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <Button text="4" accion={generarNumero} />
        <Button text="5" accion={generarNumero} />
        <Button text="6" accion={generarNumero} />
        <Button text="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <Button text="1" accion={generarNumero} />
        <Button text="2" accion={generarNumero} />
        <Button text="3" accion={generarNumero} />
        <Button text="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <Button text="0" btnEstirado={true} accion={generarNumero} />
        <Button text="." accion={generarNumero} />
        <Button text="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 20,
    marginRight: Platform.OS === 'ios' ? 10 : 20,
  },
  subResultado: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
    marginRight: Platform.OS === 'ios' ? 10 : 20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
