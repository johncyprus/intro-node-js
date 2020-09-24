const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const contactsLocation = path.join(__dirname, 'contacts.json');

const getContacts = () => {
  return JSON.parse(fs.readFileSync(contactsLocation));
};

const saveContacts = (contacts) => {
  return fs.writeFileSync(contactsLocation, JSON.stringify(contacts));
};

module.exports = { contactsLocation, getContacts, saveContacts };
