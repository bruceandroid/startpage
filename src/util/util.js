function boolTrue(value) {
  return value.toLowerCase() === 'true';
}

function getAllChildren(htmlElement) {
  console.log(htmlElement, htmlElement.children.length);
  if (htmlElement.children.length === 0) return [htmlElement];
  let allChildElements = [];

  for (let i = 0; i < htmlElement.children.length; i++) {
    let children = getAllChildren(htmlElement.children[i]);
    if (children) allChildElements.push(...children);
  }
  allChildElements.push(htmlElement);

  return allChildElements;
};

export {
  boolTrue,
  getAllChildren
}