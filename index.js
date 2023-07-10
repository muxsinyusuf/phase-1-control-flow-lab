function scuberGreetingForFeet(feet) {
  let cost;
  
  if (feet <= 400) {
    cost = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    cost = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    cost = 'No can do.';
  } else {
    cost = 0.02 * (feet - 400);
  }
  
  return cost;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  let message;
  
  switch (tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
  }
  
  return message;
}
