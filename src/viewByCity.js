class Person {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    set firstName(firstName) {
      let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (firstNameRegex.test(firstName)) {
        this._firstName = firstName;
      } else throw 'First Name is incorrect';
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(lastName) {
      let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (lastNameRegex.test(lastName)) {
        this._lastName = lastName;
      } else throw 'Last Name is incorrect';
    }
  
    get address() {
      return this._address;
    }
  
    set address(address) {
      let addressRegex = RegExp("^[A-Za-z]{4,}$");
      if (addressRegex.test(address)) {
        this._address = address;
      } else throw 'Address is incorrect';
    }
  
    get city() {
      return this._city;
    }
  
    set city(city) {
      let cityRegex = RegExp("^[A-Za-z]{4,}$");
      if (cityRegex.test(city)) {
        this._city = city;
      } else throw 'City is incorrect';
    }
  
    get state() {
      return this._state;
    }
  
    set state(state) {
      let stateRegex = RegExp("^[A-Za-z]{4,}$");
      if (stateRegex.test(state)) {
        this._state = state;
      } else throw 'State is incorrect';
    }
  
    get zip() {
      return this._zip;
    }
  
    set zip(zip) {
      let zipRegex = RegExp('^[0-9]{6}$');
      if (zipRegex.test(zip)) {
        this._zip = zip;
      } else throw 'Zip is incorrect';
    }
  
    get phoneNumber() {
      return this._phoneNumber;
    }
  
    set phoneNumber(phoneNumber) {
      let personRegex = RegExp("^[6-9]{1}[0-9]{9}$");
      if (personRegex.test(phoneNumber)) {
        this._phoneNumber = phoneNumber;
      } else throw 'Phone Number is incorrect';
    }
  
    get email() {
      return this._email;
    }
  
    set email(email) {
      let emailRegex = RegExp('^[a][b][c][.][a-z]{1,}[@][b][r][i][d][g][e][l][a][b][z][.][c][o][.][a-z]{1,}$');
      if (emailRegex.test(email)) {
        this._email = email;
      } else throw 'Email is incorrect';
    }
  }
  
  let addressBook = [];
  
  const p1 = new Person("Kaif", "Shaikh", "Peace", "Solapur", "Maharashtra", 413001, 9887654578, "abc.kaif@bridgelabz.co.gmail");
  const p2 = new Person("Sam", "Patil", "Peace", "Solapur", "Maharashtra", 413005, 9511267527, "abc.sam@bridgelabz.co.yahoo");
  
  addressBook.push(p1);
  addressBook.push(p2);
  
  const p3 = new Person("Tanvir", "Patil", "Nigdi", "Pune", "Maharashtra", 512004, 8790765423, "abc.tanvir@bridgelabz.co.in");
  
  addressBook.push(p3);
  
  function viewPersonsByCity(city) {
    return addressBook.filter(person => person.city === city);
  }
  
  function viewPersonsByState(state) {
    return addressBook.filter(person => person.state === state);
  }
  
  let fname = prompt("Enter new first name");
  let status = addressBook.reduce((status1, person) => {
    if (person._firstName === fname) status1 = "true";
    return status1;
  });
  
  if (status === "true") {
    fname = prompt("Duplicate Entry not allowed try another name");
  }
  
  let lname = prompt("Enter new last name");
  let address1 = prompt("Enter new address name");
  let city1 = prompt("Enter new city name");
  let state1 = prompt("Enter new state name");
  let zip1 = prompt("Enter new zip name");
  let phoneNumber1 = prompt("Enter new Phone Number");
  let email1 = prompt("Enter new email");
  
  const p4 = new Person(fname, lname, address1, city1, state1, zip1, phoneNumber1, email1);
  addressBook.push(p4);
  
  const cityToView = prompt("Enter city name to view persons:");
  const personsInCity = viewPersonsByCity(cityToView);
  console.log("Persons in", cityToView, ":", personsInCity);
  
  const stateToView = prompt("Enter state name to view persons:");
  const personsInState = viewPersonsByState(stateToView);
  console.log("Persons in", stateToView, ":", personsInState);
  