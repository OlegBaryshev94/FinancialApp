import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TransactionListScreen = ({ navigation }) => {
  const transactions = [
    { id: '1', name: 'Starbucks', amount: 5.00, address: '123 Main St, New York, NY, USA', time: '09:00 AM', date: '01/05/2024' },
    { id: '2', name: 'McDonald\'s', amount: 15.00, address: '456 Broadway, Los Angeles, USA', time: '12:30 PM', date: '01/06/2024' },
    { id: '3', name: 'Walmart', amount: 50.00, address: '789 Elm St, Chicago, IL, USA', time: '02:45 PM', date: '01/07/2024' },
    { id: '4', name: 'Burger King', amount: 40.00, address: '101 Pine St, Houston, TX, USA', time: '08:00 PM', date: '01/08/2024' },
    { id: '5', name: 'FoodBasics', amount: 30.00, address: '222 Oak St, Phoenix, AZ, USA', time: '10:15 AM', date: '01/09/2024' },
    { id: '6', name: 'AMC Theatres', amount: 20.00, address: '333 Maple St, Philadelphia, USA', time: '04:30 PM', date: '01/10/2024' },
    { id: '7', name: 'Reebok', amount: 100.00, address: '444 Pine St, San Antonio, TX, USA', time: '11:00 AM', date: '01/11/2024' },
    { id: '8', name: 'Amazon', amount: 25.00, address: '555 Cedar St, San Diego, USA', time: '01:00 PM', date: '01/12/2024' },
    { id: '9', name: '24 Hour Fitness', amount: 50.00, address: '666 Birch St, Dallas, USA', time: '07:00 AM', date: '01/13/2024' },
    { id: '10', name: 'Netflix', amount: 10.00, address: '777 Willow St, San Jose, USA', time: '03:00 PM', date: '01/14/2024' },
    { id: '11', name: 'WoW', amount: 60.00, address: '888 Elm St, Austin, USA', time: '06:30 PM', date: '01/15/2024' },
    { id: '12', name: 'Lineage II', amount: 45.00, address: '999 Pine St, Jacksonville, USA', time: '10:45 AM', date: '01/16/2024' },
    { id: '13', name: 'Uber', amount: 35.00, address: '111 Oak St, Fort Worth, USA', time: '05:15 PM', date: '01/17/2024' },
    { id: '14', name: 'Marshall', amount: 15.00, address: '222 Cedar St, Columbus, USA', time: '02:00 PM', date: '01/18/2024' },
    { id: '15', name: '7-Eleven', amount: 5.00, address: '333 Maple St, Charlotte, USA', time: '08:30 AM', date: '01/19/2024' },
  ];
  

  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const maxTransaction = transactions.reduce((max, transaction) => (max.amount > transaction.amount ? max : transaction), transactions[0]);
  const minTransaction = transactions.reduce((min, transaction) => (min.amount < transaction.amount ? min : transaction), transactions[0]);

  const renderTransaction = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  const goToSummary = () => {
    navigation.navigate('Summary', {
      totalTransactions,
      totalAmount,
      maxTransaction,
      minTransaction
    });
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      {goToSummary()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  transactionName: {
    fontSize: 18,
    color: '#000',
  },
  transactionAmount: {
    fontSize: 18,
    color: '#007bff',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#A9A9A9',
    marginVertical: 5,
  }
});


export default TransactionListScreen;
