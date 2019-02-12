let opstring="";
let i = 1;
while(i<=100){
if(i%3==0 && i%5!=0){
opstring+=' fizz ';
}else if(i%5==0 && i%3!=0){
opstring +=' buzz ';

}else if(i%3==0 && i%5==0){
opstring += ' fizzbuzz ';
}else{
opstring+=i + " ";
}
console.log(opstring);
i++;
}