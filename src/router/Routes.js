import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductsPage from '../components/ProductsPage';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';

function Routes() {

    return (
        <Switch>
            <Route path ="/products">
                <ProductsPage />
            </Route>
            <Route path ="/contact">
                <ContactPage />
            </Route>
            <Route path ="/">
                <HomePage />
            </Route>
        </Switch>);
}

export default Routes;