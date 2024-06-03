const getStudentsByLocation = (myArray, city) => {
  if (!Array.isArray(myArray)) {
    return [];
  }
  return myArray.filter((student) => student.location === city);
};

export default getStudentsByLocation;
