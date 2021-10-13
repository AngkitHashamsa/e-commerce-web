import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  ErrorPage,
  AuthWrapper,
  AboutPage,
  CartPage,
  CheckoutPage,
  PrivateRoute,
  ProductsPage,
  SinglePro,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/product/:id' children={<SinglePro />} />

          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
