// 1. Convert string "258.90"
var s = "258.90";
var intVal = parseInt(s, 10);     // integer
var floatVal = parseFloat(s);     // floating number
console.log(intVal, floatVal);    // 258 258.9

// 2. Format 7.45678 to 2 decimals, then back to number
var n = 7.45678;
var str2 = n.toFixed(2);          // "7.46"
var num2 = parseFloat(str2);
console.log(str2, num2);          // "7.46" 7.46

// 3. NaN check
var test1 = isNaN("abc");         // true
var test2 = isNaN("123");         // false (string but coercible)
console.log(test1, test2);

// 4. Floating point issue
console.log(0.1 + 0.2);           // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(1)); // "0.3"

// 5. safeParseInt
function safeParseInt(str) {
  if (!str || (str.charAt(0) !== '-' && (str.charAt(0) < '0' || str.charAt(0) > '9'))) {
    return null;
  }
  var i = (str.charAt(0) === '-') ? 1 : 0;
  if (i && (str.length === 1 || str.charAt(1) < '0' || str.charAt(1) > '9')) return null;
  var num = 0, sign = (str.charAt(0) === '-') ? -1 : 1;
  for (; i < str.length; i++) {
    var c = str.charAt(i);
    if (c < '0' || c > '9') break;
    num = num * 10 + (c - '0');
  }
  return sign * num;
}
console.log(safeParseInt("120px")); // 120
console.log(safeParseInt("abc123")); // null

// 6. isFiniteNumber
function isFiniteNumber(value) {
  return typeof value === "number" && !isNaN(value) && value !== Infinity && value !== -Infinity;
}
// Passing
console.log(isFiniteNumber(42));     // true
console.log(isFiniteNumber(-3.14));  // true
console.log(isFiniteNumber(0));      // true
console.log(isFiniteNumber(1000));   // true
// Failing
console.log(isFiniteNumber("42"));   // false
console.log(isFiniteNumber(NaN));    // false
console.log(isFiniteNumber(Infinity));// false
console.log(isFiniteNumber(null));   // false

// 7. Trim
var s2 = "   hello world  ".trim();
console.log(s2);

// 8. "script" from "javascript"
var w = "javascript";
console.log(w.slice(4));        // "script"
console.log(w.substring(4));    // "script"

// 9. Count 'a'
var text = "Banana Mania".toLowerCase();
var count = 0;
for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === 'a') count++;
}
console.log(count); // 5

// 10. reverseString
function reverseString(s) {
  var res = "";
  for (var i = s.length - 1; i >= 0; i--) res += s.charAt(i);
  return res;
}
console.log(reverseString("hello"));

// 11. capitalizeWords
function capitalizeWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    words[i] = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }
  return words.join(" ");
}
console.log(capitalizeWords("hello there friend"));

// 12. Extract domain
function extractDomain(url) {
  var start = url.indexOf("//") + 2;
  var end = url.indexOf("/", start);
  if (end === -1) end = url.length;
  return url.slice(start, end);
}
console.log(extractDomain("https://example.com/path/to/page"));

// 13. naiveIndexOf
function naiveIndexOf(haystack, needle) {
  for (var i = 0; i <= haystack.length - needle.length; i++) {
    var match = true;
    for (var j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) { match = false; break; }
    }
    if (match) return i;
  }
  return -1;
}
console.log(naiveIndexOf("hello world","world"));

// 14. Buggy fix
var s3 = 'hello';
if (s3.toUpperCase() === 'HELLO') { console.log('match'); }
// Issue: was assignment instead of method call + strict compare

// 15. Array 1..5 push/unshift
var arr = [1,2,3,4,5];
arr.push(6);
arr.unshift(0);
console.log(arr);

// 16. Remove last/first
var last = arr.pop();
var first = arr.shift();
console.log(last, first, arr);

// 17. Slice first 3
var a17 = [10,20,30,40,50];
var newArr = a17.slice(0,3);
console.log(newArr);

// 18. Splice remove/insert
var a18 = [1,2,3,4,5];
a18.splice(2,2,'a','b');
console.log(a18);

// 19. Slice vs Splice
var arr1 = [1,2,3,4,5];
var sliced = arr1.slice(1,3);
console.log(sliced, arr1);
var arr2 = [1,2,3,4,5];
var spliced = arr2.splice(1,2);
console.log(spliced, arr2);

// 20. Sparse array
var a20 = [];
a20[7] = 99;
console.log(a20.length); // 8

// 21. compact
function compact(array) {
  var res = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) res.push(array[i]);
  }
  return res;
}
console.log(compact([0,1,false,2,"",3,null,4,undefined]));

// 22. deepClone1D
function deepClone1D(a) {
  var copy = [];
  for (var i = 0; i < a.length; i++) copy[i] = a[i];
  return copy;
}
var orig = [1,2,3];
console.log(deepClone1D(orig));

// 23. Map squares
var squares = [1,2,3].map(function(x){ return x*x; });
console.log(squares);

// 24. Filter >= 12
var filtered = [5,10,15,20].filter(function(x){ return x>=12; });
console.log(filtered);

// 25. Reduce product
var product = [2,4,6].reduce(function(acc,x){ return acc*x; },1);
console.log(product);

// 26. arraySum
function arraySum(a) {
  return a.reduce(function(acc,x){ return acc+x; },0);
}
function arraySumLoop(a) {
  var sum=0;
  for (var i=0;i<a.length;i++) sum+=a[i];
  return sum;
}
console.log(arraySum([1,2,3]), arraySumLoop([1,2,3]));

// 27. First letters
var names = ['Ali','Sara','Kareem'];
var initials = [];
for (var i=0;i<names.length;i++) initials.push(names[i].charAt(0));
console.log(initials);

// 28. unique
function unique(a) {
  var res=[];
  for (var i=0;i<a.length;i++) {
    if (res.indexOf(a[i])===-1) res.push(a[i]);
  }
  return res;
}
console.log(unique([1,2,2,3,1]));
// O(n^2). Improvement: use an object 

// 29. flatten1
function flatten1(a) {
  var res=[];
  for (var i=0;i<a.length;i++) {
    if (Array.isArray(a[i])) {
      for (var j=0;j<a[i].length;j++) res.push(a[i][j]);
    } else res.push(a[i]);
  }
  return res;
}
console.log(flatten1([1,[2,3],[4],5]));

// 31. Object with property add
var person = {name:"Ali", age:30};
person.city = "Cairo";
console.log(person);

// 32. Bracket notation
var key = "name";
console.log(person[key]);

// 33. countKeys
function countKeys(obj) {
  var count=0;
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) count++; //Got from the internet tbh
  }
  return count;
}
console.log(countKeys(person));

// 39. Falsy values in ES5
// false
// 0
// ""
// null
// undefined
// NaN

// 40. safeToBoolean
function safeToBoolean(v) {
  return v === true || v === "true" || v === 1 || v === "1";
}
console.log(safeToBoolean("true"), safeToBoolean(0));

// 41. Jan 1 2025
var d41 = new Date(2025,0,1,0,0,0);
console.log(d41);

// 42. Current year
var year = new Date().getFullYear();
console.log(year);

// 43. daysBetween
function daysBetween(d1,d2) {
  var ms = Math.abs(d2-d1);
  return Math.floor(ms/(1000*60*60*24));
}
console.log(daysBetween(new Date(2025,0,1), new Date(2025,0,10)));

// 44. Random int 1..100
var rand = Math.floor(Math.random()*100)+1;
console.log(rand);

// 45. Round examples
var x = 4.567;
console.log(Math.round(x), Math.floor(x), Math.ceil(x));

// 46. randomIntArray
function randomIntArray(n,min,max) {
  var res=[];
  for (var i=0;i<n;i++) {
    var r = Math.floor(Math.random()*(max-min+1))+min;
    res.push(r);
  }
  return res;
}
console.log(randomIntArray(5,1,10));

// 56. parsePriceList
function parsePriceList(str) {
  var items = str.split(";");
  var obj={};
  for (var i=0;i<items.length;i++) {
    var parts=items[i].split(":");
    obj[parts[0]] = parseFloat(parts[1]);
  }
  return obj;
}
console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

// 57. filterAndSortNumbers
function filterAndSortNumbers(mixedArray) {
  var nums = mixedArray.filter(function(x){ return typeof x==="number" && !isNaN(x) && x!==Infinity && x!==-Infinity; });
  nums.sort(function(a,b){ return a-b; });
  return nums;
}
console.log(filterAndSortNumbers([3,"4",NaN,7,2,Infinity,"hi",0]));
// -> [0,2,3,7]
