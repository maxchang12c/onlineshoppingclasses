"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OnlineShopers_1 = require("./OnlineShopers");
var personA = new OnlineShopers_1.default('aa', {
    dob: new Date('1997-5-24'),
    email: 'maxchang12c@gmail.com',
    id: 'a',
    tel: '0163782110'
});
personA.profile();
console.log('hai');
