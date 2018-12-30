var database = [
{
	username : "shamim" ,
	password : "supersecret"
},
{
	username : "Sally" ,
	password : "123"
},
{
	username : "Sam" ,
	password : "444"
},
];

var newsFeed = [
 {
	username : "Bobby" ,
	timeline : "So tired from all that learning"
 }, 
 {
	username : "Sally" ,
	timeline : "JavaScript is so cool"
 }
];

var usernamePropmt = prompt("what's your username?");
var passwordPropmt = prompt("what's your password?");

function isUserValid (user , pass){
	for (var i =0; i < database.length; i++) {
	if(database[i].username == user &&
		database[i].password==pass){
		return true;
           }
         }
         return false ;
}
function signIn(user , pass){
	if(isUserValid(user , pass))
	{	
		console.log(newsFeed);
	}
    else
    {
		alert("Sorry! wrong username & password");
	}
}
 signIn(usernamePropmt,passwordPropmt);
