import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ route }) => {
  const { totalTransactions, totalAmount, maxTransaction, minTransaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.summaryItemContainer}>
        <Text style={styles.summaryLabel}>Total Transactions</Text>
        <Text style={styles.summaryValue}>{totalTransactions}</Text>
      </View>
      
      <View style={styles.summaryItemContainer}>
        <Text style={styles.summaryLabel}>Total Amount</Text>
        <Text style={styles.summaryValue}>${totalAmount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.summaryItemContainer}>
        <Text style={styles.summaryLabel}>Max Transaction</Text>
        <Text style={styles.summaryValue}>{maxTransaction.name} :   ${maxTransaction.amount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.summaryItemContainer}>
        <Text style={styles.summaryLabel}>Min Transaction</Text>
        <Text style={styles.summaryValue}>{minTransaction.name} :   ${minTransaction.amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  summaryItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 1,
  },
  summaryLabel: {
    fontSize: 18,
    color: '#666666',
    marginRight: 10,
  },
  summaryValue: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default SummaryScreen;
