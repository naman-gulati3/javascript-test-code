function User (age,name){
this.age = age;
this.name = name;
}
var user = new User();
User.prototype.compare = function(user){

if(this.age > u2.age){
console.log(this.name + ' is older than ' + user.name);
}else {
console.log(user.name + ' is older than '+ this.name);
}
}
var user1 = new User(21,'Naman');
var user2 = new User(28,'xyz');
user1.compare(user2);
