const getStudentIdsSum = (myArray) => {
  if (!Array.isArray(myArray)) {
    return [];
  }
  const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return (sum);
};

export default getStudentIdsSum;
