import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
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