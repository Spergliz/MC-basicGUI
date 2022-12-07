// My Contacts Basic
let contacts = loadcontacts();
// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let contactsE1 = document.getElementById("contacts");
let outputE1 = document.getElementById("output");

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
  let outputstr = ``;
  for (let i = 0; i < contacts.length; i++) {
    outputstr += getContactStr(contacts[i], i);
  }
  contactsE1.innerHTML = outputstr;
}

function addContact() {
  let N = prompt("give contact name");
  let E = prompt("give contact Email");
  let p = prompt("give contact phone Num");
  let C = prompt("give contact country");
  contacts.push(newcontact(N, E, p, C));
  outputE1.innerHTML += `contact added: ${N} <br>`;
  displayContacts();
  savecontact();
}

function removeContact() {
  let index = +prompt("enter contacts # (e.x: Contact X)");
  if (index >= 0 && index < contacts.length) {
    contacts.splice(index, 1);
  }else{
    alert('contact does not exist')
  }

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
    C: country,
  };
}

function getContactStr(contact, i) {
  return `
  <div> 
  Contact ${i}<br> Name:${contact.N}<br> Email:${contact.E}<br> Phone:${contact.p} <br> country:${contact.C}<br>
  </div>
  `;
}

function savecontact() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadcontacts() {
  let contactstr = localStorage.getItem("contacts");
  return JSON.parse(contactstr) ?? [];
}
