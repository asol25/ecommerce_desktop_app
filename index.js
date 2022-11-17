const Case1 = (n) => {
  if (n > 0) {
    const result = [];
    for (let index = 1; index <= n; index++) {
      if (n % index === 0) result.push(index);
    }

    if (result.length > 0) return result;
  }
  return -1;
}

const Case2 = (n) => {
  if (n > 0) {
    let result = 0;
    for (let index = 1; index <= n; index++) {
      if (n % index === 0) result++;
    }

    if (result > 0) return result;
  }
  return -1;
}

const Case3 = (n) => {
  if (n > 0) {
    let result = 0;
    for (let index = 1; index <= n; index++) {
      if (n % index === 0) result += index;
    }

    if (result > 0) return result;
  }
  return -1;
}

const Case4 = (n) => {
  if (n > 0) {
    let result = 0;
    let index = 0;
    while (result <= n) {
      index++;
      result = Math.pow(2, index);
    }

    index--;
    result = Math.pow(2, index);

    if (result > 0) return result;
  }
  return -1;
}

const Case5 = (n) => {
  if (n > 0) {
    return Case3(n) / 2 === n ? true : false;
  }
  return -1;
}

const n = 0;


const findElementSmallIntoArray = (array) => {
  return array.sort((a, b) => a - b) ? array[0] : undefined;
}

const findElementLagerIntoArray = (array) => {
  return array.sort((a, b) => a - b) ? array[array.length - 1] : undefined;
}

console.log({
  Case1: Case1(n),
  Case2: Case2(n),
  Case3: Case3(n),
  Case4: Case4(n),
  Case5: Case5(n),
});