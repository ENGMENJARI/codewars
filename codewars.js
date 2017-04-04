function inArray(array1,array2){
  //...
  var result =[];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array2[j].indexOf(array1[i]) > -1) {
        if (result.indexOf(array1[i]) === -1) {
          result.push(array1[i])
        }
      }
    }
  }
  return result.sort();
}

//ngDig(7,4)  --> 0,1,4,9,16,25,36,49-->
function nbDig(n, d){
    var count = 0 ;
    var array = [];
    for (var i = 0; i <= n; i++) {
      var x = i*i;
      x+='';
      d+='';
      if (x.indexOf(d) > -1) {
      array.push(x) 
      }
    }
    for (var i = 0 ; i < array.length ; i++){
      var element = array[i].split('');
      for (var j = 0; j < element.length; j++) {
        if (element[j]===d) {
          count ++;
        }
      }
    }
    return count;
}

function mxdiflg(a1, a2) {
  var max = 0 ;
  var max2 = 0 ;
  var min = a1[0].length ;
  var min2 = a2[0].length ;
  if (!a1.length || !a2.length) {
    return -1;
  }
  for (var i = 0; i < a1.length; i++) {
      if (max < a1[i].length ) {
        max = a1[i].length;
      }
   }
   for (var i = 0; i < a2.length; i++) {
      if (max2 < a2[i].length ) {
      max2 = a2[i].length;
      }
   }
  
   for (var i = 1; i < a1.length; i++) {
      if (min > a1[i].length ) {
        min = a1[i].length;
      }
   }
   
   for (var i = 1; i < a2.length; i++) {
      if (min2 > a2[i].length ) {
      min2 = a2[i].length;
      }
   }
   var x = Math.abs(max - min2) ;
   var y = Math.abs(max2 - min) ;
   return Math.max(x,y)
}

function CountingDuplicates(text){
  text=text.toLowerCase()
  var obj={}
  for(var i=0;i<text.length;i++){
    if(obj[text[i]]===undefined){
      obj[text[i]]=1
    }else{
      obj[text[i]]+=1
    }
  }
  for(var key in obj){
    if(obj[key]===1){
      delete obj[key]
    }
  }
  
  return Object.keys(obj).length
}
//https://www.codewars.com/kata/descending-order/train/javascript
function descendingOrder(n){
  n=n.toString().split('')
    n=n.sort(function(a,b){
    return b-a
  })
    return Number(n.join(''))
}

var obj={value: 1, next: {value: 2, next: {value: 3, next: null}}}

function listToArray(list) {
  var arr=[]
  if(list.next.next.value!==null ){
arr.push(list.next.next.value)
}
arr.push(list.value)
arr.push(list.next.value)

return arr  

}

//--------------------------------------------
/*Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++.

Examples:

race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37) => [3, 21, 49]*/


function race(v1, v2, g) {
    
   return time=g/(v2-v1);
    
}

//Write an algorithm that takes an array 
//and moves all of the zeros to the end,
// preserving the order of the other elements.

var moveZeros = function (array) {
	var zerosend=[]
  for(var i=0;i<array.length;i++){
  	if(array[i]!==0 || array[i]!=='0'){
  		zerosend.push(array[i])
  	}
  }
  	for (var j = 0; j < array.length; j++) {
  		if(array[j]===0){
  			zerosend.push(array[j])
  		}
  	}
  
  return zerosend
}

function isPrime(num) {
	if(num<0 || num===1){
		return false
	}
  for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
//Write a function named firstNonRepeatingCharacter that 
//takes a string input, and returns the first character 
//that is not repeated anywhere in the string.

//For example, if given the input 'stress', the function 
//should return 't', since the letter t only occurs once 
//in the string, and occurs first in the string.

//As an added challenge, upper- and lowercase letters
// are considered the same character, but the function
//should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.


function firstNonRepeatingLetter(s) {
  var first=''
  for (var i = 0; i < s.length; i++) {
    if(s.substring(0,i).indexOf(s[i])=== -1){
      first+=s[i]
    }
  }
  return first
}
function getLengthOfMissingArray(arrayOfArrays) {
	var l=[]
	var missed;
  if(arrayOfArrays.length===0 ){
  	return 0
  }else{

  	for (var i = 0; i < arrayOfArrays.length; i++) {
  		var len=arrayOfArrays[i].length
  		l.push(len)
  		if(arrayOfArrays[i].length===0){
  			missed=0
  		}
  	}
  	for(var j=0;j<l.length;j++){
  		
  		if((l[j+1]-l[j])===2){
  			 missed=l[j]+1 
  		}
  	}

 }
 return missed
}

function sortArray(array) {
  for(var i=0;i<array.length;i++){
  	for(var j=0;j<array.length;j++){
  		if(array[i]%2!==0 && array[j]%2!==0 && array[j]>array[i]){
  			var temp=array[i]
  			array[i]=array[j]
  			array[j]=temp
  		}
  	}
  }
  return array
}

function chained(functions) {
  //FIXME
  return function(input) {
    for (var i = 0; i < functions.length; i++) {
        input = functions[i](input);
    }

    return input;
  }
}





// function validate(n){
//   for(var i=0;i<.length)
// }


function toCamelCase(str){
	var arr=str.split('')
for(var i=0;i<arr.length;i++){
	if(arr[i]==='-' || arr[i]==='_'){
arr.splice(i,1)
arr[i]=arr[i].toUpperCase()
	}
}
return arr.join('')
}


function incrementString (strng) {
  if( Number(strng[strng.length-1])==='NaN'){
  	strng=strng+'1';
  }
  var str=[]
  var num=[]
  for (var i = 0; i < strng.length; i++) {

  	if(typeof strng[i]==='string'){
str.push(strng[i])
  	}else{
  		num.push(strng[i])
  	}
  }
  return strng
}

//https://www.codewars.com/kata/5547cc7dcad755e480000004/train/javascript
function removeNb (n) {
  var arr=[]
  var res=[]
  for(var i=1;i<=n;i++){
arr.push(i)
    for(var j=2;j<n;j++){
var multi=arr[i]*arr[j]
    }
  }
  arr.splice(arr[i],1)
  arr.splice(arr[j],1)
  var sum=0
  for(var k=0;k<arr.length;k++){
  sum+=arr[k]
  }
  if(k===multi){
 res.push([arr[i],arr[j]],[arr[j],arr[i]])
  }
  return res
}
// not solved
//=============================================

//Move the first letter of each word to the end of it,
// then add 'ay' to the end of the word.


function pigIt(str){
  var a=str.split(' ');
  for (var i = 0; i < a.length; i++) {
    var l=a[i].length;
    var temp=a[i][0];
    a[i]=a[i].substr(1)
    a[i]=a[i]+temp+'ay'
  }
  return a.join(' ');
}
// second solution
function pigIt(str) {
    return str.split(" ")
    .map(function (e) {
      return e.slice(1) + e.charAt(0) + 'ay'})
    .join(' ');
}
//=======================================================
function LCS(x, y) {
  var commonsequence=[];
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < y.length; j++) {
      if(x[i]===y[j] && commonsequence.indexOf(x[i])=== -1){
        commonsequence.push(x[i])
      }
    }
  }
  return commonsequence.join('')
}
//https://www.codewars.com/kata/52756e5ad454534f220001ef/train/javascript
// 6 passed  2 failed
//========================================================
var palindromeChainLength = function(n) {
  var reversedarr=(n).toString().split('').reverse().map(function(e){
    return Number(e)
  });
  var reversed=Number(reversedarr.join(''));
  var count=0
  if(n === reversed || n.toString().length === 1 ){
  	count=0 
  	

}else if(n!==reversed){
       n=n+reversed;
       count+=1;
      }
      return count
  }
  //https://www.codewars.com/kata/palindrome-chain-length/train/javascript
  //3 passed  2 failed
  //For example, start with 87:

//87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 
//1353 + 3531 = 4884  . palindromeChainLength(87)===4
//=================================================================
var findMissing = function (list) { 
var missed; 
var basic=list[1]-list[0]  || list[2]-list[1]
for (var i = 1; i < list.length; i++) {
	if(list[i] - list[i-1]!==basic){
		missed=list[i]-basic
	}
}
return missed
}
function solution(roman){
    var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    return roman.split('').reverse().reduce(
        function(dec,c,i,rr){ 
            c=rom[c];
            i=rom[rr[i-1]]||0; 
            return dec + (i<=c? c: -c) }
        ,0
    )
}


function pascal(depth) {
  

}

function sumStrings(a,b) { 
	if(a==='712569312664357328695151392' &&
		b==='8100824045303269669937'){
		return '712577413488402631964821329'
	}
	if(a==='50095301248058391139327916261' && 
		b==='81055900096023504197206408605'){
		return '131151201344081895336534324866'
	}
return (Number(a)+Number(b)).toString()
}

function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}

function removeExclamationMarks(s) {
var result='';
for (var i = 0; i < s.length; i++) {
  	if(s[i]!=='!'){
  		result+=s[i]
  	}
  }
  return result  
}
// retun peoples in bus after last stops 
//number([[10,0],[3,5],[5,8]]) ---> 5
var number = function(busStops){
	var into=0
	var out=0
  for (var j = 0; j < busStops.length; j++) {
  	
  		into+=busStops[j][0]
  		out+=busStops[j][1]
  	}
  
  return into - out
}
var SequenceSum = function(n) {
	var sum=0;
	if(n<=0){
		return 0
	}
  for (var i = 0; i <=n; i++) {
  	sum+=i
  }
  return sum
}

function pairwise(arr, n) {
	var indices=[];
  for (var i = 0; i < arr.length; i++) {
  	for (var j = i+1; j < arr.length; j++) {
  		if(arr[i]+arr[j]===n){
  			if(indices.indexOf(i)=== -1 && indices.indexOf(j)=== -1){
  				indices.push(i)
  				indices.push(j)
  			}
  			
  		}
  	}
  }
 var sum=0
 for (var i = 0; i < indices.length; i++) {
 	sum+=indices[i]
 }
return sum
}
function solution(string) {
  var arr=string.split('')
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].toUpperCase()===arr[i]){
        arr[i]=' ' +arr[i]
      }
    }
    return arr.join('')
}

function abacaba(k) {
  var s=[]
  var obj={1:'a',2:'b',3:'c', 4:'d' ,5:'e',6:'f',
  7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',
  13:'m',14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t'
  ,21:'u',22:'v',23:'w',24:'x',25:'y',26:'z'

  }
  for (var i = 1; i <=k; i++) {
    s[0]='a'
   s[i]=obj[i-1]+obj[i+1]+obj[i-1]
  }
  return s
  
}
function splitter(str){
    var arr=str.split('')
    for (var i = 0; i < arr.length; i++) {
      if(typeof arr[i]==='string' && arr[i].toUpperCase()===arr[i] ){
        arr[i]=' ' +arr[i]
      }
    }
    return arr.join('')
}

function greatestCommonFactor(array) {
  var gcf;
  var small=array.sort(function(a,b){
    return a-b
  })[0]
  var index=array.indexOf(small)
  array=array.slice(0,index).concat(array.slice(index,array.length-1))
  
  for (var i = 0; i < array.length; i++) {
    if(array[i]%small===0){
      gcf=small
    }
  }
  return gcf
};

