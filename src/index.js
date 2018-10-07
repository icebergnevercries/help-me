module.exports = function count(s, pairs) {
  let N = 1;

  for(let i = 0, len = Object.keys(pairs).length; i < len; i++){
    N *= (pairs[i][0] ** pairs[i][1]);
  }

  let counter = (n) => {
    let S = [];
    for(let i = 0; i < n; i++){
      S.push(1);
    }
    for(let i = 2; i <= n; i++){
      if(n % i == 0){
        for(let j = i; j <= n; j += i){
          S[j - 1] = 0;
        }
      }
    }
    var count = 0;
    for(var i = 1; i < n; i++){
      if(S[i] == 0){
        count++;
      }
    }
    return count;
  }  

  if(s == '1' && N < 10000000){
    return N - counter(N);
  }

  if(s == '0'){
    return counter(N);
  }

  return answer;
}