// Setting a cookie
/*

document.cookie="name=mihir";
document.cookie="username=usr";
document.cookie="ck1=cooki1";
document.cookie="ck2=cookie2";

console.log(document.cookie);

var COOKIE_NAME = "Timed Cookie";
var COOKIE_VALUE = "Hello, world!";
var COOKIE_EXPIRES=(new Date(Date.now() + 10000)).toUTCString();

//  The cookie's name. 
//  The cookie's value. 
//  The cookie's path. 
//  The cookie's expiration date. 
//  Set the cookie expiration to 10 seconds in future (10000ms = 10 seconds). 

document.cookie = COOKIE_NAME + "=" + COOKIE_VALUE
   + "; expires=" + COOKIE_EXPIRES;


console.log(document.cookie);

*/


// Deleting any specific cookie
/*

var expiry = new Date();
expiry.setTime(expiry.getTime() - 3600);
document.cookie = "name=mihir" + "; expires=" + expiry.toUTCString();

*/


// Deleting all the cookies
/*

function clearCookies(){

    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = cookie.substr(0, eqPos);
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

clearCookies();

console.log(document.cookie);
console.log("Deleted All");

*/



// Local Storage
// Setting an item
/*

localStorage.setItem('name', "John Smith");
// localStorage.name="John Smith";
console.log(localStorage.getItem('name'));

localStorage.setItem('StackOverflow', 'Documentation');
localStorage.setItem('font', 'Helvetica');
localStorage.setItem('image', 'sprite.svg');

*/


// Removing an item
/*

localStorage.removeItem('name');
// delete localStorage.name;
console.log(localStorage.getItem('name'));

*/

// Saving a JSON
/*

var players = [{name: "Tyler", score: 22}, {name: "Ryan", score: 41}];
localStorage.setItem('players', JSON.stringify(players));
console.log(JSON.parse(localStorage.getItem('players')));

*/

// Clearing whole localStorage
/*

console.log("Total length is "+localStorage.length);
localStorage.clear();

*/

// Saving an Array
/*

var a = [1,2,3];
localStorage.arr=a;
console.log(typeof(localStorage.arr));
console.log(localStorage.arr);

*/

// Session Storage
// sessionStorage.name="mihir";
// delete sessionStorage.name;
/*

Syntactically same as localStorage
*/