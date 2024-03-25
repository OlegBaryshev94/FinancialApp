import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TransactionListScreen from './TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

const TransactionStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F2F2F2',
        },
        headerTintColor: '#007bff', 
        headerTitleAlign: 'left', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Transactions List" 
        component={TransactionListScreen} 
        options={{ title: 'Transactions List' }}
      />
      <Stack.Screen 
        name="Transaction Detail" 
        component={TransactionDetailScreen} 
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
}

export default TransactionStackNavigator;
