module.exports = function count(s, pairs) {
  let N = 1;

  for(let i = 0, len = Object.keys(pairs).length; i < len; i++){
    N *= (pairs[i][0] ** pairs[i][1]);
  }

  let getArrayDivisorFor0 = (num) => {
    let arr = [];

    for(let i = 1; i <= num; i++){
      arr.push(i);
    }
    
    for(let i = 2; i <= num; i++){
      if(num % i == 0){
        for(let j = i; j <= num; j += i){
          arr[j - 1] = 0;
        }
      }
    }

    return arr;
  }

  let getArrayDivisorFor1 = (array, num) => {
    let arr = [];
    
    for(let i = 1; i <= num; i++){
      arr.push(i);
    }

    for(let i = 0; i <= num; i++){
      if(array[i] != 0){
        arr[i] = 0;
      }
    }

    return arr;
  }

  let logic = (str, N) => {
    let count = 0;

    if(N < 10000000){
      let arr0 = getArrayDivisorFor0(N);
      let arr1 = getArrayDivisorFor1(arr0, N);

      if(str == '1'){
        for(let i = 0; i < N; i++){
          if(arr1[i] == 0){
            count++;
          }
        }
      }

      if(str == '0'){
        for(let i = 0; i < N; i++){
          if(arr0[i] == 0){
            count++;
          }
        }
      }

      if(str == '01'){
        for(let i = 0; i < N; i++){
          if(arr0[i] == 0 && arr1[i + 1] == 0){
            count++;
          }
        }
      }

      if(str == '11'){
        for(let i = 0; i < N; i++){
          if(arr1[i] == 0 && arr1[i + 1] == 0){
            count++;
          }
        }
      }
      return count;
    }    
    else{
      return N;
    }  
  }
  
  return logic(s, N);
}