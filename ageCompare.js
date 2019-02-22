class User{
    constructor(age,name){
        this.age = age;
        this.name = name;
    }
   
}
var u1 = new User;
var u2 = new User;
  var compare = function(u1,u2){
   if(u1.age > u2.age ){
   console.log(`${u1.name} aged ${u1.age} is older than ${u2.name} aged ${u2.age}`);
   }else{
   console.log(`${u2.name} aged ${u2.age} is older than ${u1.name} aged ${u1.age}`);
   }
   }
   var user1 = new User(21,'Naman');
var user2 = new User (27,'xyz');
compare(user1,user2);
