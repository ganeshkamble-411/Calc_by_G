import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleNum = (num: number) => {
    if (!operator) {
      setNum1(num1 + num.toString());
      setCalculation(num1 + num.toString());
    } else {
      setNum2(num2 + num.toString());
      setCalculation(num1 + operator + num2 + num.toString());
    }
  };

  const handleOperator = (op: string) => {
    if (num1) {
      setOperator(op);
      setCalculation(num1 + op);
    }
  };

  const handleResult = () => {
    let res;
    switch (operator) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
      default:
        res = 0;
    }
    setResult(res.toString());
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation(num1 + operator + num2 + '=' + res.toString());
  };

  const handleClear = () => {
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation('');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    monitor: {
      width: '100%',
      height: 120,
      backgroundColor: '#333',
      borderRadius: 10,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight: 15,
      paddingBottom: 15,
      marginBottom: 15,
    },
    monitorText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    resultText: {
      fontSize: 30,
      color: '#0f0',
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      marginBottom: 8,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginHorizontal: 4,
      borderRadius: 8,
      backgroundColor: '#ddd',
      elevation: 2,
    },
    buttonText: {
      fontSize: 20,
      color: '#333',
    },
    operatorButton: {
      backgroundColor: '#ff9f43',
    },
    clearButton: {
      fontSize: 20,
      color: '#fff',
      backgroundColor: '#d9534f',
      paddingHorizontal: 8,
      borderRadius: 5,
      overflow: 'hidden',
    },
    equalButton: {
      backgroundColor: '#28a745', // Green background for '=' button
    },
    footerText: {
      marginTop: 20,
      fontSize: 16,
      color: '#333',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.monitor}>
        <Text style={styles.monitorText}>{num1} {operator} {num2} {operator && num2 ? '=' : ''}</Text>
        <Text style={[styles.monitorText, styles.resultText]}>{result}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={[styles.buttonText, styles.clearButton]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNum(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={handleResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>Calc by Ganesh</Text> {/* Footer text */}
    </View>
  );
}
