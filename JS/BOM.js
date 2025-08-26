//All objects are by window (BOM)

// clear()  --> console.clear()
var x = 5

window.console.log(x)

// Window, navigator, location, history, screen, dialogs, timers
var Newwin;
function openWindow1(){
   window.open("newWindow.html","",width="500",height="500");
}
function openWindow2(){
    Newwin = window.open("newWindow.html","",width="500",height="500") // var is fnuction scope;
}
function closeWindow1(){
    window.close() // close current home window
}
function closeWindow2(){
    Newwin.close() // close current home window
}
// opener() - moveto - moveby - scrollto- scrollby
//Navigator : navigator.onLine 
//Location - window.location.href - window.location.href.slice(window.location.href.indexOf("?"+1)).split("&")
//         - location.search - location.pathname - location.protocol - location.port - .replace
window.location.href.slice(window.location.href.indexOf("?")+1)

window.location.href.slice(window.location.href.indexOf("?")+1).split("&")
//History 
//window.history.length - .forward - .back  - .reload 

//Screen - .width - .avalWidth - .height - .avalHeight
window.screen()

//timer - setTimeout - clearTimeout
function SayHello1(){
    console.log("Hello")
}
function showMessage(){
    console.log(" Form timeout ");
}
console.log("Before Calling");
var timeoutId;
function SayHello(){
    timeoutId= setTimeout(showMessage,0)
    console.log("Hello");
}
function CancelHello(){
    clearTimeout(timeoutId);
}

function Congratulations(){
    intervalId = setInterval(
        function (){
            alert("Congratulations You have won IPHONE16!!!")
        },3000
    );
}
function StopCongratulations(){
    clearInterval()
}

//Document

window.document()

document.childNodes

document.childNodes[1].childNodes
