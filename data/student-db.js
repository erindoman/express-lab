const students = [
    {student: 'Erin', grade: 'A++++'},
    {student: 'Bob', grade: 'A-'},
    {student: 'Sally', grade: 'A+'},
    {student: 'Steve', grade: 'B'}
]

module.exports = {
    getAll: function() {
        return students;
    }
}