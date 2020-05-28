import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import SignTab from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <SignTab />
    </NavigationContainer>
  )
}