export default function updateStudentGradeByCity (myArray, city, newGrades) {
  if (!Array.isArray(myArray) || !Array.isArray(newGrades)) {
    return ([]);
  }
  item = myArray.filter((student) => student.location === city).map((student) => {
    item2 = newGrades.filter((student2) => student.id === student2.id);
    return { ..student, grade: item2 ? item2.grade : 'N/A'};
  });
  return item;
}

