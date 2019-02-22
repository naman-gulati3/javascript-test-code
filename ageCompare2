function User (age,name){
this.age = age;
this.name = name;
}
var u1= new User();
var u2 = new User();
User.prototype.compare = function(u2){

if(this.age > u2.age){
console.log(this.name + ' is older than ' + u2.name);
}else {
console.log(u2.name + ' is older than '+ this.name);
}
}
var user1 = new User(21,'Naman');
var user2 = new User(28,'xyz');
user1.compare(user2);
