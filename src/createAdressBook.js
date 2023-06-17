//To create Person class
class Person{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName  = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    display(){
        console.log("First Name "+this.firstName+" Last Name "+this.lastName+" Address "+
        this.address+" City "+this.city+" State "+this.state+" Zip "+this.zip+" PhoneNumber "+
        this.phoneNumber+" Email "+this.email);
    }
}