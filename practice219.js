// Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

class Contact {
  constructor(name, age, contactInfo) {
    this.name = name;
    this.age = age;
    this.contactInfo = contactInfo;
  }
}

const contact = new Contact("Hank", 40, {
  cell: 2112139082,
  email: "hank@email.com",
  address: "2131 Pine Street",
});
console.log("Personal info:");
console.log(`name: ${contact.name}`); // this works because now contact holds all the properties of that object
console.log(`age: ${contact.age}`);
console.log(`contactInfo: ${JSON.stringify(contact.contactInfo, null, 2)}`);
