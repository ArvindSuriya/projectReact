import React, { Component } from 'react';

class SelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.invoiceDetails);
        return (
            <select>
                {this.props.invoiceDetails.map((item, index) =>
                    <option key={index}>{item}</option>
                )}
            </select>
        );
    }
}

export default SelectField;