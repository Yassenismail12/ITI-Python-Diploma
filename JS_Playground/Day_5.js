// 1
// Output:
// console.log(a()); // "A"
// console.log(b()); // "B"
console.log(a());
var b = function(){ return 'B'; };
function a(){ return 'A'; }
console.log(b());
// a works before definition due to hoisting of function declarations
// b does not because only its var is hoisted (value = undefined until assignment).

// 2
function sum(a,b){ return a+b; }
var add = function(a,b){ return a+b; };
console.log(sum(3,4), add(3,4)); 

// 3
var factorial = function f(n){
  if(n<=1) return 1;
  return n * f(n-1); // Msh global 
}
console.log(factorial(5)); // 120

// 4
function showInfo(){
  console.log("length:", arguments.length);
  for(let i=0;i<arguments.length;i++){
    console.log("arguments", i, arguments[i]);
  }
}
showInfo();
showInfo("X","Y");
showInfo(1,2,3,4,5);

// 5
function mutate(x,y){
  console.log("before:", arguments[0], arguments[1]);
  x = 99; y = 100;
  console.log("after:", arguments[0], arguments[1]);
}
mutate(5,6);

// 6
function sumAll(){
  var total=0;
  for(let i=0;i<arguments.length;i++) total+=arguments[i];
  return total;
}
console.log(sumAll(2,5,3)); 
console.log(sumAll()); 

// 7
function sumAll2(){
  return Array.prototype.reduce.call(arguments, (acc,v)=>acc+v, 0);
}
console.log(sumAll2(2,5,3)); 

// 8
function describeValue(){
  if(arguments.length===0) return 'none';
  if(arguments.length===1) return 'one:'+arguments[0];
  if(arguments.length===2) return 'two:'+arguments[0]+','+arguments[1];
  return 'too many';
}
console.log(describeValue());
console.log(describeValue(5));
console.log(describeValue(1,2));
console.log(describeValue(1,2,3));

// 9
var funcs = [
  n=>n+1,
  n=>n*2,
  n=>n-3
];
let val = 10;
for(let f of funcs) val = f(val);
console.log(val); 

// 10
function makeMultiplier(factor){
  return function(n){ return n*factor; };
}
var double = makeMultiplier(2);
var triple = makeMultiplier(3);
console.log(double(7), triple(7)); 

// 11
function once(fn){
  let done=false;
  return function(){
    if(!done){ done=true; return fn(); }
  };
}
var helloOnce = once(()=>{ console.log("run"); return "Hi"; });
console.log(helloOnce());
console.log(helloOnce());

// 12
function onceMemo(fn){
  let done=false, result;
  return function(){
    if(!done){ done=true; result=fn(); }
    return result;
  };
}
var hiMemo = onceMemo(()=>{ console.log("compute"); return "Val"; });
console.log(hiMemo()); 
console.log(hiMemo()); 

// 13
function makeCounter(start){
  let n=start;
  return {
    inc: ()=>++n,
    dec: ()=>--n,
    value: ()=>n
  };
}
var c1=makeCounter(0), c2=makeCounter(10);
console.log(c1.inc(), c1.value()); 
console.log(c2.dec(), c2.value()); 

// 14
function makeAdder(start){
  let total=start;
  return function(x){ total+=x; return total; };
}
var a1=makeAdder(0), a2=makeAdder(100);
console.log(a1(5), a1(3)); 
console.log(a2(1), a2(2));

// 15
function memoize1(fn){
  let cache={};
  return function(n){
    if(n in cache) return cache[n];
    return cache[n]=fn(n);
  };
}
function slowSquare(n){ return n*n; }
var memoSq=memoize1(slowSquare);
console.log(memoSq(9));
console.log(memoSq(9)); 

// 16
function memoizeN(fn){
  let cache={};
  return function(){
    let key=[...arguments].join('|');
    if(key in cache) return cache[key];
    return cache[key]=fn.apply(this, arguments);
  };
}
function add3(a,b,c){ return a+b+c; }
var memoAdd3=memoizeN(add3);
console.log(memoAdd3(1,2,3));
console.log(memoAdd3(1,2,3));

// 17
var user={name:"Omar", sayHi:function(){ console.log("Hi",this.name); }};
user.sayHi(); 
var f=user.sayHi;
f(); 

// 18
user.sayHi.call({name:"Sara"});
user.sayHi.apply({name:"Sara"});

// 19
var greeter={ greet:function(greeting,sign){ console.log(greeting," ",this.name,sign); } };
greeter.greet.apply({name:"Ali"}, ["Hello","!"]);

// 20
var greetLara=greeter.greet.bind({name:"Lara"});
greetLara("Hi","!");
greetLara("Hello","...");

// 21
function sayHello(obj){
  return greeter.greet.bind(obj,"Hello");
}
var helloSara=sayHello({name:"Sara"});
helloSara("!");
helloSara("!!");

// 22
function showArgs(){
  var arr=[].slice.call(arguments);
  console.log("reversed:", arr.slice().reverse());
}
showArgs(1,2,3,4);

// 23
var arr=[5,2,11,7];
console.log(Math.max(...arr)); 
let max=-Infinity;
for(let n of arr){ if(n>max) max=n; }
console.log(max);

// 24
console.log(Math.max.call(null,1,2,3)); 
console.log(Math.max.apply(null,[1,2,3])); 

// 25
let name="Ali", age=20;
console.log(`User: ${name} Age: ${age+1}`);

// 26
let title="My Title", body="Some text";
console.log(`${title}\n${body}`);
console.log(title + "\n" + body);

// 27
if(true){
  var i=1;
  let j=2;
  console.log(i,j); 
}
console.log(i); 
// console.log(j); // ReferenceError

// 28
// console.log(x); // ReferenceError
let x=5;

// 29. const array
const arr2=[1,2];
arr2.push(3); // works
// arr2=[9]; // TypeError: Assignment to constant variable

// 30
function square(n){ return n*n; }
const square1=(n)=>{ return n*n; };
const square2=n=>n*n;
console.log([1,2,3].map(n=>n*n));

// 31
var timer={
  count:0,
  startClassic:function(){
    let id=setInterval(function(){
      this.count++;
      console.log("classic",this.count); // this is global or undefined
      if(this.count>3) clearInterval(id);
    },200);
  },
  startArrow:function(){
    let id=setInterval(()=>{
      this.count++;
      console.log("arrow",this.count); // this binds to timer
      if(this.count>3) clearInterval(id);
    },200);
  }
};
// timer.startClassic(); // this wrong 
// timer.startArrow();   // works

// 32
const f2=()=>({v:10});
console.log(f2());

// 33
var bad={
  x:10,
  show:()=>console.log(this.x) // this is not bad, but outer
};
bad.show(); // undefined

// 34
const greet=(name)=>`Hi ${name}!`;
console.log(greet("Ali"));

// 35
const add2=n=>n+2;
const times3=n=>n*3;
const minus1=n=>n-1;
function runPipeline(n,fns){
  for(let fn of fns) n=fn(n);
  return n;
}
console.log(runPipeline(5,[add2,times3,minus1]));

// 36
var obj={n:1, inc:function(){ this.n++; return this.n; }};
var inc=obj.inc;
console.log(obj.inc()); 
console.log(inc());     // NaN

// 37
var arrC=[];
for(let i=0;i<1000;i++) arrC.push(makeCounter(0));
// each closure keeps its own state -> memory overhead for large numbers

// 38
function safeFirst(){
  if(arguments.length===0) return undefined;
  return arguments[0];
}
console.log(safeFirst(), safeFirst(5,6));

// 39
function factory(names){
  let result={};
  for(let name of names){
    let n=0;
    result[name]=()=>++n;
  }
  return result;
}
var counters=factory(['a','b']);
console.log(counters.a(), counters.a());
console.log(counters.b());

// 40
// - Difference between function declarations vs function expressions
// - How arrow functions bind `this` differently from classic functions
