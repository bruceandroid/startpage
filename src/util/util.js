function boolTrue(value) {
  return value.toLowerCase() === 'true';
}

function addInitialZero(time) {
  if (time < 10) {
    time = '0' + time;
  }
  return time;
}

function getAllChildren(htmlElement) {
  if (htmlElement.children.length === 0) return [htmlElement];
  let allChildElements = [];

  for (let i = 0; i < htmlElement.children.length; i++) {
    let children = getAllChildren(htmlElement.children[i]);
    if (children) allChildElements.push(...children);
  }
  allChildElements.push(htmlElement);

  return allChildElements;
};

function numberToRoman(number) {
  let result = "";
  const romanList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  for(let i in romanList) {
    while(number >= romanList[i]){
      result += i;
      number -= romanList[i];
    }
  }
  return result;
}

export {
  boolTrue,
  addInitialZero,
  getAllChildren,
  numberToRoman
}