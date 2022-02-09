const listContacts = require("./listContacts");
const { v4 } = require("uuid");
const updateContactsList = require('./updateContactsList');

async function addContact(data) {
    const newContact = {id: v4(), ...data};
    const contactsList = await listContacts();
    contactsList.push(newContact);
    await updateContactsList(contactsList);
    return newContact;
};

module.exports = addContact;