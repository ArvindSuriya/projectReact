import React from 'react';
// import './App.css';
import TextField from './TextField';
import SelectField from './SelectField'

function OrderDetails(props) {
    console.log(props.dateField)
    return (
        <div id="orderDetails">
            <div className="date">
                <span className="divTitle">*order Date</span><br />
                <TextField type={props.dateField} />
            </div>
             <div className="orderStatus">
                 <span className="divTitle">*Order Status</span><br />
                 <div className="selectField">
                     <SelectField invoiceDetails={props.invoiceDetails} />
                 </div>
             </div> 
            <div className="orderReference">
                <span className="divTitle">*Customer order Reference</span><br />
                <TextField type={props.textField} />
            </div> 
        </div>
    )
}
export default OrderDetails