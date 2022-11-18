function ex(n , x) {
  let sum = x;

  for (let i = 1; i >= n; i++)
      sum = 1 + x * sum / i;

  return sum;
}

console.log(ex(10, 2));