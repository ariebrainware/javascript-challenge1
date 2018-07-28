"use strict";
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Class defenition

class People {
  constructor(firstName, lastName, address = "", phoneNumber = "", email = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

class ContactAction extends People {
  constructor(addContact, deleteContact, updateContact, searchContact) {
    super({
      firstName,
      lastName,
      address,
      phoneNumber,
      email
    });
    this.addContact = addContact;
    this.deleteContact = deleteContact;
    this.updateContact = updateContact;
    this.searchContact = searchContact;
  }
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Form validation [Bootstrap 4]

window.addEventListener(
  "load",
  function() {
    var forms = document.getElementsByClassName("needs-validation");
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener(
        "submit",
        function(event) {
          event.preventDefault();
          if (form.checkValidity() === false) {
            event.stopPropagation();
          } else {
            addToDOM();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  false
);

const person = new People(
  "Arie",
  "Brainware",
  "Nowhere",
  "0878223123",
  "ariebrainware@gmail.com"
);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Show data

const showData = data => {
  return person;
};

console.log(showData(person));
