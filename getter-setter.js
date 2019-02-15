const person = {
    firstName: 'Naman',
    lastName: 'Gulati',
    get fullName(){
    return `${person.firstName} ${person.lastName}`;
    
    },
    set fullName(value){
    const parts = value.split(' ');
    person.firstName = parts[0];
    person.lastName = parts[1];
    }
    };
    person.fullName = "John Smith";
    console.log(person.fullName);