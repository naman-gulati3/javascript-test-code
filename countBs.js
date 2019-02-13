var countBs = function(uppercaseB){
    var count = 0;
    var uppercaseBstring = String(uppercaseB);
    var length = uppercaseBstring.length;
    for(var i=0;i<length;i++){
    if(uppercaseBstring[i]=='B'){
    count +=1;
    }
    }
    console.log(count);
    }
    countBs("Bad Black man with ButterKnife playing BaseBall");