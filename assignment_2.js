// Excercise 2
// ------- If/else statement -----
// 1. Write an if/else statement that checks whether a number is positive or negative.
var number = 99;
if (number > 0) {
  console.log("possitive");
} else {
  console.log("negative");
}
//     If the number is positive, log "The number is positive" to the console.
if (number > 0) {
  console.log("possitive");
  //     If the number is negative, log "The number is negative" to the console.
} else {
  console.log("negative");
}
// 2. Write an if/else statement that checks whether a number is even or odd.
if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
//     If the number is even, log "The number is even" to the console.
//     If the number is odd, log "The number is odd" to the console.
// 3. Write an if/else statement that checks whether a number is divisible by 3.
if (number % 3 == 0) {
  console.log("The number is divisible by 3");
} else {
  console.log("The number is not divisible by 3");
}
//     If the number is divisible by 3, log "The number is divisible by 3" to the console.
//     If the number is not divisible by 3, log "The number is not divisible by 3" to the console.
// 4. Write an if/else statement that checks whether a person is eligible to vote.
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
//     If the person is 18 or older, log "You are eligible to vote" to the console.
//     If the person is younger than 18, log "You are not eligible to vote" to the console.
// 5. Write an if/else statement that checks whether a person is eligible for a senior discount.
if (age >= 65) {
  console.log("You are eligible for a senior discount");
} else {
  console.log("You are not eligible for a senior discount");
}
//     If the person is 65 or older, log "You are eligible for a senior discount" to the console.
//     If the person is younger than 65, log "You are not eligible for a senior discount" to the console.
// ------ If/elseif/else statement -----
// 1. Write an if/elseif/else statement that checks the value of a variable grade and logs the corresponding letter grade to the console. A grade of 90 or above should receive an "A", a grade between 80 and 89 should receive a "B", a grade between 70 and 79 should receive a "C", a grade between 60 and 69 should receive a "D", and a grade below 60 should receive an "F".
var grade = 90;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}
// 2. Write an if/elseif/else statement that checks the value of a variable temperature and logs a corresponding message to the console.
//     If the temperature is above 80, log "It is too hot". If the temperature is between 70 and 80, log "The temperature is just right". If the temperature is below 70, log "It is too cold".
var temperature = 66;
if (temperature > 80) {
  console.log("It is too hot");
} else if (temperature >= 70) {
  console.log("The temperature is just right");
} else {
  console.log("It is too cold");
}
// 3. Write an if/elseif/else statement that checks the value of a variable hour and logs a corresponding message to the console.
//     If the hour is between 6 and 12, log "Good morning". If the hour is between 12 and 18, log "Good afternoon". If the hour is between 18 and 24, log "Good evening". If the hour is between 0 and 6, log "Good night".
var hour = 8;
if (hour > 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else if (hour >= 18 && hour < 24) {
  console.log("good evening");
} else if (hour >= 0 && hour <= 6) {
  console.log("good night");
}
// 4. Write an if/elseif/else statement that checks the value of a variable day and logs a corresponding message to the console.
// var day = 1
// if (day = 1){console.log ("Monday")}
//     If the day is 1, log "Monday". If the day is 2, log "Tuesday". If the day is 3, log "Wednesday".
//     If the day is 4, log "Thursday". If the day is 5, log "Friday". If the day is 6, log "Saturday".
//     If the day is 7, log "Sunday". If the day is not between 1 and 7, log "Invalid day".
// 5. Write an if/elseif/else statement that checks the value of a variable age and logs a corresponding message to the console.
//     If the age is between 18 and 64, log Yo"u are an adult". If the age is 65 or older, log "You are a senior". If the age is below 18, log "You are a minor".
if (age > 18 && age < 65) {
  console.log("You are an adult");
} else if (age >= 65) {
  console.log("your are a senior");
} else {
  console.log("You are a minor");
}
// ------- Switch Statement -----
// 1. Write a switch statement that takes a variable day and logs a corresponding message to the console.
//     If the day is 1, log "Monday". If the day is 2, log "Tuesday". If the day is 3, log "Wednesday".
//     If the day is 4, log "Thursday". If the day is 5, log "Friday". If the day is 6, log "Saturday".
//     If the day is 7, log "Sunday". If the day is not between 1 and 7, log "Invalid day".
var day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuseday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("invalid");
}
day === 1
  ? console.log("Monday")
  : day === 2
  ? console.log("Tuseday")
  : day === 3
  ? console.log("Wednesday")
  : day === 4
  ? console.log("Thursday")
  : day === 5
  ? console.log("Friday")
  : day === 6
  ? console.log("Saturday")
  : day === 7
  ? console.log("Sunday")
  : console.log("Invalid day")(
      //  another way to do grade

      grade >= 90
    )
  ? console.log("A")
  : grade >= 80
  ? console.log("B")
  : grade >= 70
  ? console.log("C")
  : grade >= 69
  ? console.log("D")
  : console.log("F");

// 3. Write a switch statement that takes a variable month and logs the number of days in that month to the console.
//     Assume that February has 28 days. If the month is 1, 3, 5, 7, 8, 10, or 12, log "31".
//     If the month is 4, 6, 9, or 11, log "30". If the month is 2, log "28".

// value of 6 9 11 unavailable, others working fine

// turns out its only accept the first variable in each case, not in "or"
var Month = 3;

switch (Month) {
  case 1 || 3 || 5 || 7 || 8 || 10 || 12:
    console.log("31");
    break;
  case 4 || 6 || 9 || 11:
    console.log("30");
    break;
  case 2:
    console.log("28");
}

switch (Month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30");
    break;

  default:
    console.log("28");
    break;
}

// 4. Write a switch statement that takes a variable color and logs a corresponding message to the console.
//     If the color is "red", log "Stop". If the color is "yellow", log "Caution". If the color is "green", log "Go".
var color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Caution");
    break;

  case "Green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Color");
}

//     If the color is not "red", "yellow", or "green", log "Invalid color".

// 5. Write a switch statement that takes a variable type and returns the corresponding value of price.

var Type = "Banana";
//     If the type is "banana", return "$0.99". If the type is "apple", return "$0.89".
//     If the type is "orange", return "$0.79". If the type is not "banana", "apple", or "orange", return "Invalid type":

switch (Type) {
  case "Banana":
    console.log("$0.99");
    break;
  case "apple":
    console.log("$0.89");
    break;

  case "orange":
    console.log("0.79");
    break;

  default:
    console.log("Invalid type");
}
