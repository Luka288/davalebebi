// user login implementation
let userEmail = "lukagaxokidze28@gmail.com";
let userPassowrd = "12345678";

if (userPassowrd === "12345678" && userEmail === "lukagaxokidze28@gmail.com") {
  console.log("Signed In !");
} else if (!userPassowrd === "12345678") {
  console.log("passowrd is invalid");
} else if (!userEmail === "lukagaxokidze28@gmail.com") {
  console.log("email is invalid");
} else {
  console.log("error check email/passowrd");
}

// user change

let balance = 300;

let item1 = 150;
let item2 = 100;
let item3 = 25;

if (balance > item1 && item2 && item3) {
  let change = balance - item1 && item2 && item3;
  console.log("Your change is: " + change);
}

//  checking user jwt token

let checkRefreshToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

if (checkRefreshToken) {
  console.log("user is signed in");
} else {
  console.log("user does not exists");
}
