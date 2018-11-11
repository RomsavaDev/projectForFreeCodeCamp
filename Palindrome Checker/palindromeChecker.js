function palindrome(str) {
var tempStrWithSymbols=str.split("");
var charArr = new Array();
var newString;
var reversString;

for(var i=0;i<tempStrWithSymbols.length;i++)
{
if(tempStrWithSymbols[i].toLowerCase() != tempStrWithSymbols[i].toUpperCase()){
  charArr.push(tempStrWithSymbols[i])
}else if((tempStrWithSymbols[i]>='0')&&(tempStrWithSymbols[i]<='9')){
  charArr.push(tempStrWithSymbols[i])
}
}

newString= charArr.toString().toLowerCase();
reversString=newString.split("").reverse().join("");
if(newString==reversString){
return true;
}
else{
return false;
}
  
}



;
console.log(palindrome("eye"));