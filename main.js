let userName = 'francis';
userName ? 
    console.log('Hello, $userName')
 : console.log("Hello");
let userQuestion = "can you enter my question?";
console.log(`The user asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch(randomNumber){
  case 0:
  eightBall = 'it is certain';
  break;
  case 1:
  eightBall = 'it is decidely so';
  break;
  case 2:
  eightball = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'can not predict now';
  break;
  case 4:
  eightBall = 'do not count on it';
  break;
  case 5:
  eightBall = 'my sources say no';
  break;
  case 6:
  eightBall = 'outlook not so good';
  break;
  case 7:
  eightBall = 'signs point to yes';
  break;
}
console.log(eightBall);