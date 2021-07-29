let formData = {
  fname: '',
  sname: '',
  bday: '',
  phoneNumber: '',
  email: '',
  policyNumber: '',
  date: '',
  description: '',
  address: '',
  country: '',
  radioTourism: '',
  radioSport: '',
  radioPhysical: '',
  radioStudy: '',
};
let items = [];
let openMenuSwitch = false;

function initializeData(step) {
  const locData = localStorage.getItem('formData');
  if (locData) {
    formData = JSON.parse(locData);
  }
  if (step === 1) {

    document.getElementById('fname').value = formData.fname;
    document.getElementById('sname').value = formData.sname;
    document.getElementById('bday').value = formData.bday;
    document.getElementById('phoneNumber').value = formData.phoneNumber;
    document.getElementById('email').value = formData.email;
    document.getElementById('policyNumber').value = formData.policyNumber;
  }
  if (step === 2) {

    document.getElementById('date').value = formData.date;
    document.getElementById('description').value = formData.description;
    document.getElementById('address').value = formData.address;
    document.getElementById('country').value = formData.country;
    document.getElementById('radioTourism').checked = formData.radioTourism;
    document.getElementById('radioSport').checked = formData.radioSport;
    document.getElementById('radioPhysical').checked = formData.radioPhysical;
    document.getElementById('radioStudy').checked = formData.radioStudy;
  }

}

function saveData(step) {
  if (step === 1) {
    formData.fname = document.getElementById('fname').value;
    formData.sname = document.getElementById('sname').value;
    formData.bday = document.getElementById('bday').value;
    formData.phoneNumber = document.getElementById('phoneNumber').value;
    formData.email = document.getElementById('email').value;
    formData.policyNumber = document.getElementById('policyNumber').value;
  }
  if (step === 2) {
    formData.date = document.getElementById('date').value;
    formData.description = document.getElementById('description').value;
    formData.address = document.getElementById('address').value;
    formData.country = document.getElementById('country').value;
    formData.radioTourism = document.getElementById('radioTourism').checked;
    formData.radioSport = document.getElementById('radioSport').checked;
    formData.radioPhysical = document.getElementById('radioPhysical').checked;
    formData.radioStudy = document.getElementById('radioStudy').checked;
  }

  localStorage.setItem('formData', JSON.stringify(formData));
}

function saveItems(){
  localStorage.setItem('items',JSON.stringify(items));
}

function loadItems(){
  const itemsStorage =localStorage.getItem('items');
  items = itemsStorage?JSON.parse(itemsStorage):[];
}

function resetForm() {
  formData = {
    fname: '',
    sname: '',
    bday: '',
    phoneNumber: '',
    email: '',
    policyNumber: '',
    date: '',
    description: '',
    address: '',
    country: '',
    radioTourism: '',
    radioSport: '',
    radioPhysical: '',
    radioStudy: '',
  }
  items=[];
  localStorage.setItem('formData', JSON.stringify(formData));
  saveItems();

}

function toggleMenu() {
  openMenuSwitch = !openMenuSwitch;
  if (openMenuSwitch) {
    document.getElementById('menu-list').classList.add('show');
    document.querySelector('.ext-button').classList.add('show');
  } else {
    document.getElementById('menu-list').classList.remove('show');
    document.querySelector('.ext-button').classList.remove('show');
  }
}
