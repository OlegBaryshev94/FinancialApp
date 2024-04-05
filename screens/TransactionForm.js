import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

const TransactionForm = ({ onAddTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (!name || !amount || !address || !date || !time) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newTransaction = {
      name,
      amount: parseFloat(amount),
      address,
      date,
      time,
      id: Date.now().toString(),
    };

    onAddTransaction(newTransaction);

    // Reset form
    setName('');
    setAmount('');
    setAddress('');
    setDate('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Company name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />
      
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
      />
      
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
      />
      
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date"
      />
      
      <Text style={styles.label}>Time</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="Enter time"
      />
      
      <Button title="Add Transaction" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default TransactionForm;
