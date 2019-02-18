function numbers(num1,num2){
    this.num1=num1;
    this.num2 = num2;
}

numbers.prototype.add = function(){
    return this.num1 + this.num2;
}
numbers.prototype.multiply = function(){
    return this.num1*this.num2;

}
numbers.prototype.mod = function(){
    return this.num1%this.num2;
}
numbers.prototype.subtract = function(){
    return this.num1 - this.num2;
}
var obj = new numbers(8,3);
console.log(obj.add());
console.log(obj.multiply());
console.log(obj.mod());
console.log(obj.subtract());