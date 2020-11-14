import React from 'react';
import {Provider} from 'react-redux'
import MasterLayout from './components/master-layout/MasterLayout'
import Products from './components/Products/Products'
import './App.less';
import locale from 'antd/es/locale/zh_CN';
import store from './redux/store'
function App() {
  return (
    <Provider locale={locale} store={store}>
        <MasterLayout>
          <Products />
        </MasterLayout>
    </Provider>
  );
}
export default App;