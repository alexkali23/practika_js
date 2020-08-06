var day_week = prompt('day week', 0);
if(day_week == 0){
    console.log(' ponedelnik')
}else if(day_week == 1){
    console.log(' vtornick')
}else if(day_week == 2){
    console.log(' sreda')
}else if(day_week == 3){
    console.log(' chetverg')
}else if(day_week == 4){
    console.log(' piatnica')
}else if(day_week == 5){
    console.log(' sybota')
}else if(day_week == 6){
    console.log('voskresenie')
}


switch(+day_week) {
    case 0: 
        console.log(' ponedelnik');
        break;
    case 1: 
        console.log(' vtornick');
        break;
    case 2: 
        console.log(' sreda');
        break;
    case 3: 
        console.log(' chetverg');
        break;
    case 4: 
        console.log(' piatnica');
        break;
    case 5: 
        console.log(' sybota');
        break;
    case 6: 
        console.log('voskresenie');
        break;
    default:
        console.log('mimo')
      break
  }