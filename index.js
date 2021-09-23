var readlineSync = require("readline-sync")
var score=0;
var highScore =[6];
console.log("QUIZ : DO YOU KNOW SHUBHANGI ENOUGH??")

var player = readlineSync.question("What's your name? ").toUpperCase();
console.log("\n")
console.log("Welcome! "+player+ " to know me land!!")
console.log("\n")


var questionList = [
   questionOne = 
  {
  question: "In which city I live? ",
  answer: "Delhi"
  },
   questionTwo =
  {
    question:"How old am I? ",
    answer: "25"
  },
   questionThree =
  {
    question: "Where do I work? (Company Name) ",
    answer :"Coforge"
  },
   questionFour =
  {
    question :"When is my Birthday? ",
    answer : "13 August"
  },
   questionFive =
  {
    question : "Am I a shopping addict? ",
    answer : "Yes"
  },
   questionSix =
  {
    question :"Am I a food addict? ",
    answer :"Yes"
  },
   questionSeven =
  {
    question : "Who is my Best Friend ? ",
    answer : "Isha"
  }

 ];

function playQuiz(questionList){
  for(var i=0;i<questionList.length;i++){
    if(response==="no"){
      break;
    }
    var playerAnswer = readlineSync.question(questionList[i].question);
    if((playerAnswer.toUpperCase())===(questionList[i].answer).toUpperCase()){
      score = score+1;
      console.log("YOU ARE RIGHT!!")
      console.log("YOU SCORED : "+score)
      console.log(".............................")
    }
    else{
      console.log("YOU ARE WRONG!!")
      console.log("Right answer is : "+questionList[i].answer.toUpperCase())
      console.log("YOU SCORED : "+score);
      console.log(".............................")
    }
      var response = wishToContinue();
      
  }
  highScore.push(score)
  gameOver();
}

function wishToContinue(){
  var response = readlineSync.question("Do you wish to Continue?? ")
  if(response==="yes"){
    return response;
  }
  else{
    return response;
  }
 
}


function gameOver(){
   console.log("GAME OVER..................")
   console.log("SEE YOU SOON!! "+ player);
   console.log("FINAL SCORE : "+score+"      HIGHEST SCORE : "+highScore[0])
   console.log("If you have beaten the highest score, SEND A SCRRENSHOT!!!!")
}

playQuiz(questionList);