import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [resultado, setResultado] = useState('0');
  const [subResultado, setSubResultado] = useState('0');

  const operacion = useRef<Operadores>();

  const limpiar = () => {
    setResultado('0');
    setSubResultado('0');
  };

  const generarNumero = (numero: string) => {
    // No aceptar poner más de un punto en el resultado
    if (resultado.includes('.') && numero === '.') {
      return;
    }

    // Validaciones
    if (resultado.startsWith('0') || resultado.startsWith('-0')) {
      if (numero === '.') {
        setResultado(resultado + numero);
      } else if (numero === '0' && resultado.includes('.')) {
        setResultado(resultado + numero);
      } else if (numero !== '0' && !resultado.includes('.')) {
        setResultado(numero);
      } else if (numero === '0' && !resultado.includes('.')) {
        setResultado(resultado);
      } else {
        setResultado(resultado + numero);
      }
    } else {
      setResultado(resultado + numero);
    }
  };

  const togglePositivoNegativo = () => {
    if (resultado.includes('-')) {
      setResultado(resultado.replace('-', ''));
    } else {
      setResultado('-' + resultado);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = resultado;
    if (resultado.includes('-')) {
      negativo = '-';
      numeroTemp = resultado.substr(1);
    }

    if (numeroTemp.length > 1) {
      setResultado(negativo + numeroTemp.slice(0, -1));
    } else {
      setResultado('0');
    }
  };

  const cambiarNumPorAnterior = () => {
    if (resultado.endsWith('.')) {
      setSubResultado(resultado.slice(0, -1));
    } else {
      setSubResultado(resultado);
    }
    setResultado('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.multiplicar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(resultado);
    const num2 = Number(subResultado);

    switch (operacion.current) {
      case Operadores.sumar:
        setResultado(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setResultado(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setResultado(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setResultado(`${num2 / num1}`);
        break;
    }
    setSubResultado('0');
  };

  return {
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
  };
};
