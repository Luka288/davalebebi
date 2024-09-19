let num = 100;

if (num < 50) {
  console.log("ნაკლებია 50 ზე");
} else if (num > 20) {
  console.log("მეტია 20 ზე");
} else {
  console.log("შეცდომა");
}

//2

let useName = "მარიამ";

if (useName === "მარიამ") {
  console.log(true);
} else {
  console.log(false);
}

//switch case

let UserName = "მარიამ";

switch (UserName) {
  case "მარიამ":
    console.log(true);
    break;
  default:
    console.log(false);
    break;
}
