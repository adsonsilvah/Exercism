export function timeToMixJuice(name) {
    switch (name) {
      case 'Pure Strawberry Joy':
        return 0.5;
      case 'Energizer':
      case 'Green Garden':
        return 1.5;
      case 'Tropical Island':
        return 3;
      case 'All or Nothing':
        return 5;
      default:
        return 2.5;
    }
  }
  
  export function limesToCut(wedgesNeeded, limes) {
    let wedgesCut = 0;
    let limesCut = 0;
  
    const limeSizes = {
      'small': 6,
      'medium': 8,
      'large': 10
    };
  
    for (let lime of limes) {
      if (wedgesCut >= wedgesNeeded) break;
      
      wedgesCut += limeSizes[lime] || 0; 
      limesCut++; 
    }
  
    return limesCut;
  }

 export function remainingOrders(timeLeft, orders) { 

  while (timeLeft > 0) {

    timeLeft = timeLeft - timeToMixJuice(orders[0]);      

    orders.shift();      
  }
  return orders;
}