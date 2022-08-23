const checkArr = (arr) => {
    let sum = 0;
  
    for(i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    if(sum % 3 != 0) {
      return false;
    }
  
    let sum3 = sum/3;
    let partitions = 0;
    sum = 0;
    
    for(i = 0; i < arr.length; i++) {
      sum += arr[i]
      if(sum === sum3) {
        partitions ++;
        sum = 0;
      }
    }
  
    return partitions >= 3;
  }
  
  const example1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
  const example2 = [1, 1, 2, 0, 2, 1, 4, 1];
    
  console.log(checkArr(example1));
  console.log(checkArr(example2, 'example2'));