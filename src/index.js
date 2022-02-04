module.exports = function reverse (n) {
    n = Math.abs(n);
      let d = String(n);
    let i = 0;
   
    let result = '';
    while (i < d.length) {
      // Соединяем в обратном порядке
      result = d[i] + result;
     
      i = i + 1;
    }
 
    return Number(result);
  };
