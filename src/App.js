import React from 'react';
import {DataProvider} from './components/DataProvider'
import MasterLayout from './components/master-layout/MasterLayout'
import Products from './components/Products/Products'
import './App.less';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';
function App() {
  return (
    <DataProvider locale={locale}>
        <MasterLayout>
          <Products />
        </MasterLayout>
    </DataProvider>
  );
}
export default App;