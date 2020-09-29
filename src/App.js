import React from 'react';
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import About from './components/About/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer/Footer'
import ProductDetiles from './components/ProductDetiles/ProductDetiles'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
function App() {
  return (
    <DataProvider>
      <div>
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
    
  );
}

export default App;