//To create Person class with person information
class Person{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName  = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() {return this._firstName;}

    set firstName(firstName){
    
       let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNameRegex.test(firstName)){
            this._firstName = firstName;
        }
        else throw 'First Name is incorrect';
    }

    get lastName() {return this._lastName;}

    set lastName(lastName){
    
    let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(lastNameRegex.test(lastName)){
        this._lastName = lastName;
    }
    else throw 'Last Name is incorrect';
    }

    get address() {return this._address;}

    set address(address){
    
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if(addressRegex.test(address)){
        this._address= address;
    }
    else throw 'Address is incorrect';
    }

    get city() {return this._city;}

    set city(city){
    
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if( cityRegex.test(city)){
        this._city = city;
    }
    else throw 'City is incorrect';
    }
    get state() {return this._state;}

    set state(state){
    
    let stateRegex = RegExp("^[A-Za-z]{4,}$");
    if( stateRegex.test(state)){
        this._state = state;
    }
    else throw 'State is incorrect';
    }
    get zip() {return this._zip;}

    set zip(zip){
    
    let zipRegex =  RegExp('^[0-9]{6}$');
    if(zipRegex.test(zip)){
        this._zip = zip;
    }
    else throw 'Zip is incorrect';
    }
    get phoneNumber(){return this._phoneNumber;}

    set phoneNumber(phoneNumber){
    let personRegex = RegExp("^[6-9]{1}[0-9]{9}$");
    if(personRegex.test(phoneNumber)){
        this._phoneNumber = phoneNumber;
    }
    else throw 'Phone Number is incorrect';
    }
    get email(){return this._email;}

    set email(email){
    let emailRegex = RegExp('^[a][b][c][.][a-z]{1,}[@][b][r][i][d][g][e][l][a][b][z][.][c][o][.][a-z]{1,}$');
    if(emailRegex.test(email)){
        this._email = email;
    }
    else throw 'Email is incorrect';
    }
}

//To create person object
const p1 = new Person("Kaif","Shaikh","Peace","Solapur","Maharashtra",413001,9887654578,"abc.kaif@bridgelabz.co.gmail");
const p2 = new Person("Sam","Patil","Peace","Solapur","Maharashtra",413005,9511267527,"abc.sam@bridgelabz.co.yahoo");

//UC3 To create array

let addressBook = new Array();

addressBook.push(p1);
addressBook.push(p2);