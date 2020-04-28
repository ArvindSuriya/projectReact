import React from 'react';
import TextField from './TextField';
import SelectField from './SelectField';

function CurrencyDetails(props) {
    return (
        <div id="currencyDetails">
            <div className="totalAmount">
                <span className="divTitle">*Total Amount</span><br />
                <div className="selectField">
                    <TextField type={props.textField} />
                </div>
            </div>
            <div className="currencyFormat">
                <span className="divTitle">*Currency Format</span><br />
                <div className="selectField">
                    <SelectField invoiceDetails={props.currencyOptions} />
                </div>
            </div>
            <div className="freightTerms">
                <span className="divTitle">*FrieghtTerms</span><br />
                <div className="selectField">
                    <SelectField invoiceDetails={props.freightOptions} />
                </div>
            </div>
            <div className="shippingMethod">
                <span className="divTitle">*shippingMethod</span><br />
                <div className="selectField">
                    <SelectField invoiceDetails={props.shipMethod} />
                </div>
            </div>
        </div>
    )
}
export default CurrencyDetails