/**
 * Created by Daniel on 6/13/2016.
 */

import React from 'react';
import {Comment} from "inactive/useless-functions/lib/Comment";
import {Person} from "inactive/useless-functions/lib/Person";
import {name} from "inactive/useless-functions/lib/name";
import {address} from "inactive/useless-functions/lib/address";

var UseUselessFunctions = React.createClass({
  render: function () {
    const firstName = "Daniel";
    const middleInitial = "M";
    const lastName = "Halverson";
    const street = "123 Main Street";
    const city = "Aurora";
    const state = "IL";
    const zip = "60503";
    const countryCode = "USA";
    let person = new Person(firstName, middleInitial, lastName, street,
      city, state, zip, countryCode);
    
    return (
      <div>
        <Comment />
        <p>{person.details()}</p>
        <p>{name(firstName, middleInitial, lastName)}</p>
        <p>{address(street, city, state, zip, countryCode)}</p>
        <p>Another name call: {name("Dan", null, lastName)}</p>
      </div>
    );
  }
});

export default UseUselessFunctions;