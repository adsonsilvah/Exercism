export function needsLicense(kind) {
    if(kind == 'car' || kind == 'truck'){
      return true;
    }
    return false;
  }
  
  export function chooseVehicle(option1, option2) {
    if(option1 < option2){
     return option1 + ' is clearly the better choice.'; 
    }
      return option2 + ' is clearly the better choice.';
  }
  
  export function calculateResellPrice(originalPrice, age) {
    if(age < 3){
     return originalPrice * 0.8;
    }
    else if (age > 10){
     return originalPrice * 0.5;
    }
    else if (3 <= age && age <= 10 ){
      return originalPrice * 0.7;
    }
  }  