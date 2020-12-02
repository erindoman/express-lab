const students = [
    {name: 'Erin', grade: 'A++++', pass: true},
    {name: 'Bob', grade: 'A-', pass: true},
    {name: 'Sally', grade: 'A+', pass: true},
    {name: 'Steve', grade: 'F', pass: false}
]

module.exports = {
    getAll: function() {
        return students;
    }
}

