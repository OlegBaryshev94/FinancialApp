import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../firebaseConfig';

const db = getFirestore(app);
const transactionsCollection = collection(db, 'transactions');

const SummaryScreen = () => {
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [maxTransaction, setMaxTransaction] = useState({ name: '', amount: 0 });
  const [minTransaction, setMinTransaction] = useState({ name: '', amount: Number.MAX_VALUE });

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const querySnapshot = await getDocs(transactionsCollection);
        let total = 0;
        let max = { name: '', amount: 0 };
        let min = { name: '', amount: Number.MAX_VALUE };

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          total += data.amount;

          if (data.amount > max.amount) {
            max = { name: data.name, amount: data.amount };
          }

          if (data.amount < min.amount) {
            min = { name: data.name, amount: data.amount };
          }
        });

        setTotalTransactions(querySnapshot.size);
        setTotalAmount(total);
        setMaxTransaction(max);
        setMinTransaction(min);
      } catch (error) {
        console.error("Error fetching summary data: ", error);
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.summaryItemContainer}>
          <Text style={styles.summaryLabel}>Total Transactions</Text>
          <Text style={styles.summaryValue}>{totalTransactions}</Text>
        </View>
        
        <View style={styles.summaryItemContainer}>
          <Text style={styles.summaryLabel}>Total Amount</Text>
          <Text style={styles.summaryValue}>${totalAmount.toFixed(2)}</Text>
        </View>
        
        <View style={styles.summaryItemContainer}>
          <Text style={styles.summaryLabel}>Max Cost</Text>
          <Text style={styles.summaryValue}>{maxTransaction.name} :   ${maxTransaction.amount.toFixed(2)}</Text>
        </View>
        
        <View style={styles.summaryItemContainer}>
          <Text style={styles.summaryLabel}>Min Cost</Text>
          <Text style={styles.summaryValue}>{minTransaction.name} :   ${minTransaction.amount.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#1a5276',
    borderRadius: 15,
    padding: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 1, height: 1 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 2, 
  },
  summaryItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  summaryLabel: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 10,
  },
  summaryValue: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default SummaryScreen;
