import React from 'react';
import {DataProvider} from './components/DataProvider'
import MasterLayout from './components/master-layout/MasterLayout'
import Products from './components/Products/Products'
import './App.less';
function App() {
  return (
    <DataProvider>
        <MasterLayout>
          <Products />
        </MasterLayout>
    </DataProvider>
  );
}
export default App;