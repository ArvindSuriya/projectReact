import React from "react";
import TextField from "./TextField";
import SelectField from "./SelectField";

function LocationDetails(props) {
  return (
    <div id="locationDetails">
      <div className="city">
        <span className="divTitle">city: </span>
        <TextField type={props.textField} />
      </div>
      <div className="state">
        <span className="divTitle">State: </span>
        <TextField type={props.textField} />
      </div>
      <div className="postal">
        <span className="divTitle">Postal Code: </span>
        <TextField type={props.textField} />
      </div>
      <div className="country">
        <span className="divTitle">country: </span>
        <div className="selectField">
          <SelectField invoiceDetails={props.countryField} />
        </div>
      </div>
    </div>
  );
}
export default LocationDetails;
