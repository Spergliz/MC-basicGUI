// My Contacts Basic
let contacts = []
// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let contactsE1 = document.getElementById('contacts');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
for(let i = 0; i<contacts.length; i++) {
  contactsE1.innerHTML = `${contacts[i]}`
}
}


function addContact() {
  let N = prompt("give contact name") 
  let E = prompt("give contact Email")
  let C = prompt("give contact country")
  contacts.push
}

function removeContact() {
  console.log('Remove Contact');
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}
