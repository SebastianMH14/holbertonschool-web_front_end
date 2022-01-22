function createClassRoom (numbersOfStudents) {
  function studentSeat (seat) {
    return function () {
      return seat;
    };
  }
  const students = [];
  for (let i = 0; i <= numbersOfStudents; i++) {
    const x = i + 1;
    students.push(studentSeat(x));
  }
  return students;
}

const classRoom = (function () {
  return createClassRoom(10);
})();
