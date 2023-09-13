function CreateClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
    return function () {
        return seat;
    };
        
    }

var students = [];

for ( let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));

}
return students;
}

const classRoom = CreateClassRoom(10);