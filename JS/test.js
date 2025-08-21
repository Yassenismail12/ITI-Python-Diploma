// var x = 5;
// var y = new Number(7);

// var s = "String"
// var st = new String("STRING")

// var b = false
// var bol = new Boolean(true)

// console.log(typeof(x))
// console.log(typeof(y))
// console.log(typeof(s))
// console.log(typeof(st))
// console.log(typeof(b))
// console.log(typeof(bol))



// console.log(x);A
// var x = 5;

// var x = 5;
// var y = new Number(5)
// console.log(x==y) //False!

// var x = 123.4567;	
// console.log(x.toFixed(2));
// console.log(x.toPrecision(4));

// var a = parseInt("a 11");
// if (isNaN(a)) {
//     console.log("YES");
// }

// console.log(parseInt("123px"));
// console.log(parseFloat("123.45px"));
// console.log(Number("123px"));

// var i = "I am " + 23;
// console.log(i);

// var n = 45;
// var s = String(n);
// console.log(s);

// console.log(true + 5);
// console.log(typeof(true + 5));
// console.log("10" - 2);
// console.log(typeof("10" - 2));
// console.log(12 - "1a");
// console.log(typeof(12 - "1a"));
// console.log(5 / 0);
// console.log(typeof(5 / 0));
// console.log(5+undefined);
// console.log(typeof(5+undefined));

// var a = "15.5";
// var b = +a;
// console.log(b, typeof b);

// var result = 20 > true < 5 == 1;
// console.log(result);

// function canbenum (s) {
//     x = parseInt(s);
//     if (isNaN(x)){
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// s = "123pox";
// console.log(canbenum(s));

// var x = 1;
// while (x<=20) {
//     console.log(x);
//     x = x+1;
// }

// var sum = 0;
// var number;
// do {
//   number = parseInt(prompt("Enter numbers"));
//   if (number !== 0) {
//     sum += number;
//   }
// } while (number !== 0);
// console.log("The sum : " + sum);

// for (var i = 1; i <= 7; i++) {
//   var day;
//   switch (i) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//       day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//       break;
//     default:
//       day = "Invalid day";
//   }
//   console.log(i + " is " + day);
// }

// var s = "258.90"

// var i = parseInt(s)
// console.log(i);

// var f = parseFloat(s)
// console.log(f);

// var t = 7.45678;
// t = t.toFixed(2);
// console.log(t);
// t = parseFloat(t);

// var x = "abc"; //string
// if (Number.isNaN(x)){
//     console.log("Is Nan (1)");
// }

// var x = "1a"; //number
// if (isNaN(x)){
//     console.log("Is Nan (2)");
// }

// var x = "1a"; //number
// if (Number.isNaN(x)){
//     console.log("Is Nan (3)");
// }

// var o = 0.1 + 0.2;
// console.log(o);
// if (o == 0.3) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }
// o = o.toFixed(1);
// console.log(o);
// if (o == 0.3) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// function StricttttParseInt(str) {
//   var i = 0;
//   var sign = 1
//   if (str.charAt(0) === '-') {
//     sign = -1;
//     i = 1;
//   }
//   if (i >= str.length || str.charAt(i) < '0' || str.charAt(i) > '9') {
//     return null;
//   }

//   var num = 0;
//   while (i < str.length && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
//     num = num * 10 + (str.charAt(i) - '0');
//     i++;
//   }

//   return sign * num;
// }


// console.log(StricttttParseInt("120px"))
// console.log(StricttttParseInt("a/120px"))

// function isFiniteNumber(value) {
//   return typeof value === "number" && !isNaN(value) && value !== Infinity && value !== -Infinity;
// }
// // Works
// console.log(isFiniteNumber(1.6));
// console.log(isFiniteNumber(-1));
// console.log(isFiniteNumber(10000000));
// console.log(isFiniteNumber(0));
// // Msh Works
// console.log(isFiniteNumber("1.6"));
// console.log(isFiniteNumber(NaN));
// console.log(isFiniteNumber(Infinity));
// console.log(isFiniteNumber({}));

// var s = "   hello world  "
// s = s.trim("   ")
// console.log(s);

// var l = "javascript"
// console.log(l.slice(4,10))
// console.log(l.substring(4,10));

// var str = "Banana Mania";
// str = str.toLowerCase();
// var arr = str.split('');
// console.log(arr);
// function cntletters(letter,arr) {
//     cnt = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (letter == arr[i]){
//             cnt+=1;
//         }
//     }
//     return cnt
// }
// var cnt = cntletters('a',arr)
// console.log(cnt);
// // -------------------------------------------------------------
// var str = "Banana Mania";
// str = str.toLowerCase();
// var arr = str.split('');
// console.log(arr);
// var c = 0;
// arr.forEach(element => {
//     if (element == 'a'){
//         c+=1;
//     }
// });
// console.log(c);
//10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {
  var result = "";
  for (var i = s.length - 1; i >= 0; i--) {
    result += s.charAt(i);
  }
  return result;
}
console.log(reverseString("hello")); 

//11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    words[i] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }
  return words.join(" ");
}

console.log(capitalizeWords("hello there friend")); 

//12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
function extractDomain(url) {
  let start = url.indexOf("//") + 2;         
  let end = url.indexOf("/", start);        
  if (end === -1) end = url.length;
  return url.slice(start, end);
}

console.log(extractDomain("https://example.com/path/to/page")); 

// 13  Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(S, needle) {
  for (var i = 0; i <= S.length - needle.length; i++) {
    var match = true;
    for (var j = 0; j < needle.length; j++) {
      if (S.charAt(i + j) !== needle.charAt(j)) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

console.log(naiveIndexOf("hello world", "world")); 
console.log(naiveIndexOf("hello world", "abc"));   

//14 .Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = 'hello';
if (s.toUpperCase() === 'HELLO') { 
  console.log('match');
}

//15. Create an array of the numbers 1..5, then push 6 and unshift 0.
var arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
console.log(arr); 

// 16. Remove the last element and store it. Remove the first element and store it.
var arr = [0,1,2,3,4,5,6];
var last = arr.pop();    
var first = arr.shift();
console.log(last, first); 
console.log(arr);  

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
var arr = [10,20,30,40,50];
var first3 = arr.slice(0, 3);
console.log(first3); 

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
var arr = [1,2,3,4,5];
arr.splice(2, 2, 'a', 'b'); 
console.log(arr);

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
var arr1 = [1,2,3,4,5];
var sliced = arr1.slice(1,3); 
console.log(sliced); 
console.log(arr1);  

var arr2 = [1,2,3,4,5];
var spliced = arr2.splice(1,2); 
console.log(spliced); 
console.log(arr2);  

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
var arr = [];
arr[7] = 99;
console.log(arr.length); 

//21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) result.push(array[i]); 
  }
  return result;
}
console.log(compact([0,1,false,2,"",3,null,4,undefined])); 
