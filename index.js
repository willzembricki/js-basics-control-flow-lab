let greeting;
function scuberGreetingForFeet(feet){
  if (feet <= 400){
  greeting = `This one is on me!`
  return greeting 
}
  else if (feet > 2000 && feet <= 2499){
  greeting =  'I will gladly take your thirty bucks.'
  return greeting
}
  else if (feet > 2500){
greeting = `No can do.`
return greeting 
  }
  // Write your   code here!
}

function ternaryCheckCity(city){
  if (city === `NYC`){
    greeting = `Ok, sounds good.`
    return greeting 
  }
  else {
    greeting =`No go.`
    return greeting 
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      greeting = "Thank you so much."
      return greeting;
    case "not as generous":
      greeting = `Thank you.`
      return greeting;
    case "thanks for everything": 
      greeting = `Bye.`
      return greeting;    
  }
 // Write your code here!
}