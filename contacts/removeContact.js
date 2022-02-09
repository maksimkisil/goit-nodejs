const fs = require("fs/promises");
const listContacts = require("./listContacts");
const updateContactsList = require('./updateContactsList');

async function removeContact(contactId) {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if(idx === -1){
        return null;
    }
    const removeContact = contacts.splice(idx, 1);
    await updateContactsList(contacts);
    return removeContact;
};

    module.exports = removeContact;