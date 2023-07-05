import React from 'react';
import Main from './src/components/Main';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
};

export default App;
