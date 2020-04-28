import React from 'react';
import TextField from './TextField';

function CustomerDetails(props) {
    return (
        <div id="customerDetails">
            <div className="name">
                <span className="divTitle">*Name</span><br />
                <TextField type={props.textField} />
            </div>
            <div className="discription">
                <span className="divTitle">*Description</span><br />
                <div className="selectField">
                    <TextField type={props.textField} />
                </div>
            </div>
        </div>
    )
}
export default CustomerDetails