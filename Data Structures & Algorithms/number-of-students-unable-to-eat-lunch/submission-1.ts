class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let co = 0, ci = 0, studentsFood = 0;
        for(let i = 0; i < students.length; i++) {
            students[i] === 0 ? co += 1 : ci += 1;
        }
        for(let i = 0; i < sandwiches.length; i++) {
            if ((!sandwiches[i] && !co) || (sandwiches[i] && !ci)) {
                break;
            }
            if (!sandwiches[i]) {
                co -= 1;
            } else if (sandwiches[i]) {
                ci -= 1;
            }
            studentsFood += 1;
        }
        return co + ci;
    }
}
