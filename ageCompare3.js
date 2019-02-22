class User {
constructor(age,name){
this.age = age;
this.name = name;
} 
}
var u2 = new User;
var user1 = {
age : 21,
name : 'Naman',
compare : function(u2){
if(this.age > u2.age){
console.log(this.name + ' is older than ' + u2.name);
}else {
console.log(u2.name + ' is older than '+ this.name)
}
}
}
var user2 = new User(24,'xyz');

user1.compare(user2);
