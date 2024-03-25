import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from '../screens/TransactionListScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions" component={TransactionListScreen} />
    
    </Stack.Navigator>
  );
}

export default StackNavigator;
