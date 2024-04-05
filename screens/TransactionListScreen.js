import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from '../firebaseConfig';
import TransactionForm from './TransactionForm';

const db = getFirestore(app);
const transactionsCollection = collection(db, 'transactions');

const TransactionListScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(transactionsCollection);
        const fetchedTransactions = [];
        querySnapshot.forEach((doc) => {
          fetchedTransactions.push({ id: doc.id, ...doc.data() });
        });
        setTransactions(fetchedTransactions);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };

    fetchTransactions();
  }, []);

  const addNewTransaction = async (newTransaction) => {
    try {
      const docRef = await addDoc(transactionsCollection, newTransaction);
      setTransactions([...transactions, { ...newTransaction, id: docRef.id }]);
      setIsFormVisible(false);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const renderTransaction = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isFormVisible ? (
        <TransactionForm onAddTransaction={addNewTransaction} />
      ) : (
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setIsFormVisible(true)}
        >
          <Text style={styles.addButtonText}>ADD NEW TRANSACTION</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  transactionName: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  transactionAmount: {
    fontSize: 18,
    color: '#007bff',
    fontWeight: 'bold',
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default TransactionListScreen;
