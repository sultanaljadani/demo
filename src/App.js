import React from 'react';
import {DataProvider} from './components/DataProvider'
import MasterLayout from './components/master-layout/MasterLayout'
import './App.less';
function App() {
  return (
    <DataProvider>
        <MasterLayout/>
    </DataProvider>
  );
}
export default App;