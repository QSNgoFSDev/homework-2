# homework-2

Solving problem realted to following topics:
// ------- If/else statement -----
// ------- Switch Statement -----
I did trying to shorten switch statement using ternary operator, 


*for such ternary operator, it works in independt javascript. not with whole homework.

 (grade >= 90)
  ? console.log("A")
  : grade >= 80
  ? console.log("B")
  : grade >= 70
  ? console.log("C")
  : grade >= 69
  ? console.log("D")
  : console.log("F");
  
  * Is there any other way to shorten code using switch:

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

*for such lines of codes, chatGPT said its working just fine. console report no error also,..

but it just reccvied value of 1 4 2 for switch function
