export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || !Array.isArray(newGrades)) {
        return [];
    }
    
    return students
        .filter(student => student.location === city)
        .map(student => {
            const grade = newGrades.find(grade => grade.studentId === student.id);
            return {
                id: student.id,
                firstName: student.firstName,
                location: student.location,
                grade: grade ? grade.grade : 'N/A'
            };
        });
}
