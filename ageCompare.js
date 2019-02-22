class User{
    constructor(age,name){
        this.age = age;
        this.name = name;
    }
   
}
var user1 = new User(21,'Naman');
var user2 = new User (27,'xyz');
   function compare(){
   if(user1.age > user2.age ){
   console.log(`${user1.name} aged ${user.age} is older than ${user2.name} aged ${user2.age}`);
   }else{
   console.log(`${user2.name} aged ${user2.age} is older than ${user1.name} aged ${user1.age}`);
   }
   }
   
   user1.compare(user2);
