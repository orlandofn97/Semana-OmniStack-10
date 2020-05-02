import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/Routes'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar BARsTYLE="light-content" backgroundColor="#7D04E7" />
      <Routes />
    </>
  );
}
