import React from 'react';
import TextField from './TextField';

function AddressDetails(props) {
    return (
        <div id="addressDetails">
            <span className="divTitle">*AddressDetails</span>
            <TextField type={props.textField} />
            <TextField type={props.textField} />
        </div>
    )
}
export default AddressDetails