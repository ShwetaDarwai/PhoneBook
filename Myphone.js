// create factory function
function createContact(Name,Phone,Email){
    return {
        Name:Name,
        Phone:Phone,
        Email:Email
    }
}
//function to store a contact:
const storeContact ={
    contacts :[],
    addContact : function(Name,Phone,Email){
       const newContact = createContact(Name,Phone,Email);
        this.contacts.push(newContact);
        return newContact
    }

}
// add Contact
let a =storeContact.addContact("shweta","2343454545","shweta@gmail.com");
let b =storeContact.addContact("isha","6674578845","isha@gmail.com");
let c =storeContact.addContact("prashva","265789345","prashva@gmail.com");
let d=storeContact.addContact("vihan","23456567678","vihan@gmail.com");
let e =storeContact.addContact("kiara","2345456556","kia@gmail.com");
// console.log(a,b,c,d,e);

// search for contacts
function searchForContact(Name) {
    const foundContact = storeContact.contacts.find(contact =>contact.Name==Name);
    if (foundContact) {
        return foundContact;
    } else {
        return "Not found";
    }
}

let searchResult = searchForContact("shweta");
// console.log(searchResult);


// // To Update a Contacts

function updateContact(oldName,newPhone,newEmail){
    const update = storeContact.contacts.find(contact => contact.Name == oldName);
    if (update){
        update.Phone = newPhone;
        update.Email = newEmail;
        return update;
    }
    else {
        return "Not Found";
    }
}
let s = updateContact("shweta","1234567891","sss@gmail.com");
// console.log(s);

// function To delete the contact 

 function deleteContact(Name) {
    const deleteIndex = storeContact.contacts.findIndex(contact => contact.Name == Name);
    if (deleteIndex !== -1) {
        storeContact.contacts.splice(deleteIndex, 1);
        return "Contact deleted successfully.";
    } else {
        return "Contact not found.";
    }
 }
 
 let k = deleteContact("isha");
//  console.log(k);