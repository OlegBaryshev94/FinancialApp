import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Name</Text>
        <Text style={styles.detailValue}>{transaction.name}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Amount</Text>
        <Text style={styles.detailValue}>${transaction.amount.toFixed(2)}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Address</Text>
        <Text style={styles.detailValue}>{transaction.address}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Time</Text>
        <Text style={styles.detailValue}>{transaction.time}</Text>
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Date</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333333',
    textAlign: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 1,
  },
  detailLabel: {
    fontSize: 18,
    color: '#666666',
    marginRight: 10,
  },
  detailValue: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default TransactionDetailScreen;
