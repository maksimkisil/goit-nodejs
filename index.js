const { Command } = require('commander');
const contactsOperations = require("./contacts/contacts");

const program = new Command();

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
        const contactsList = await contactsOperations.listContacts();
        console.table(contactsList);
      break;

    case 'get':
        const contact = await contactsOperations.getContactById(id);
        console.log(contact);
      break;

    case 'add':
        const newContact = await contactsOperations.addContact({name, email, phone});
        console.log(newContact);
      break;

    case 'remove':
        const removeContact = await contactsOperations.removeContact(id);
        console.log(removeContact);
      break;

      default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const options = program.opts();

invokeAction(options);