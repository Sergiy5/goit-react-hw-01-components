function ifEvenNumber(type) {
  type += 1;
  const number = type % 2 === 0;
  return number;
}

export default ifEvenNumber;
