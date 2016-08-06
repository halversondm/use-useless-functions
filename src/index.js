"use strict";

import {name} from "useless-functions/lib/name";
import {address} from "useless-functions/lib/address";
import {Person} from "useless-functions/lib/Person";

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

console.log(name(firstName, middleInitial, lastName));
console.log(name("Dan", null, lastName));
console.log(address(street, city, state, zip, countryCode));
console.log(person.details());
