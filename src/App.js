import React from 'react';
import Header from './components/master-layout/Header/Header'
import Products from './components/Products/Products'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Footer from './components/master-layout/Footer/Footer'
import ProductDetiles from './components/ProductDetiles/ProductDetiles'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
function App() {
  return (
    <>
      <DataProvider>
          <div className="header">
            <Router>
                <Header />
                  <section>
                      <Route path="/products" component={Products} />
                      <Route path="/productDetiles/:id" component={ProductDetiles} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/cart" component={Cart} />
                  </section>
            </Router>
          </div>
        <Footer />
      </DataProvider>
    </>
  );
}
export default App;