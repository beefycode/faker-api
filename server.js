// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');
const express = require("express");

const app = express();
const port = 8000;


const createUser = () => ({
    password: faker.internet.password(),
    email:faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
    
});

const newUser = createUser();
console.log(newUser);


const createCompany = () => ({
    _id: faker.datatype.uuid(),
    companyName: faker.company.name(),
    address:faker.address.buildingNumber(),
    addressStreet:faker.address.streetAddress(),
    city:faker.address.city(),
    state:faker.address.stateAbbr(),
    zipCode:faker.address.zipCode(),
    country:faker.address.country(),
    
});

const newCompany = createCompany();
console.log(newCompany);



app.listen( port, () => console.log(`Listening on port: ${port}`) );

// this needs to be below the other code blocks
app.get('api/users/new',(request,response)=>{
    response.json({newUser})
    })
app.get('api/companies/new',(request,response)=>{
    response.json({newCompany})
    })