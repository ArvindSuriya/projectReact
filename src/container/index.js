import React, { Component } from 'react';
import OrderDetails from '../components/OrderDetails';
import CustomerDetails from '../components/CustomerDetails';
import CurrencyDetails from '../components/CurrencyDetails';
import AddressDetails from '../components/AddressDetails';
import LocationDetails from '../components/LocationDetails'
import { inputTypes } from '../constants/constants';
import { currency } from '../constants/constants';
import { invoice } from '../constants/constants'
import { freight } from '../constants/constants'
import { shippingMethods } from '../constants/constants'
import { country } from '../constants/constants'

class Index extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">Sales Order</div>
        <OrderDetails dateField={inputTypes[0]} textField={inputTypes[1]} invoiceDetails={invoice} />
        <CustomerDetails textField={inputTypes[1]} />
        <CurrencyDetails currencyOptions={currency} freightOptions={freight} shipMethod={shippingMethods} />
        <AddressDetails textField={inputTypes[1]} />
        <LocationDetails countryField={country} />
      </div>
    );
  }
}

export default Index;