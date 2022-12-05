// My Contacts Basic
let contacts = [""];
// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let contactsE1 = document.getElementById("Contacts");

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  for (let i = 0; i < contacts.length; i++) {
    contactsE1.innerHTML = `${contacts[i].N}`;
  }
}

function addContact() {
  let N = prompt("give contact name");
  let E = prompt("give contact Email");
  let p = prompt("give contact phone Num")
  let C = prompt("give contact country");
  contacts.push(newcontact(N,E,p,C));
  contactsE1.innerHTML += `contact added: ${N,E,p,C}`
}

function removeContact() {
  console.log("Remove Contact");
}

function displayByName() {
  console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}

function newcontact(name, email, phone, country) {
  return {
    N: name,
    E: email,
    p: phone,
    C: country
  };
}
