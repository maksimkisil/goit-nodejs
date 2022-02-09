const listContacts = require("./listContacts");

async function getContactById(id) {
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === id);
    if(!contact){
        return null;
    }
    return contact;  
};

    module.exports = getContactById;