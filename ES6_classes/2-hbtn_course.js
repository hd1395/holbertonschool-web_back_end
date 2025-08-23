/**
 * Represents a Holberton course with a name, length, and a list of students.
 * @class
 */
export default class HolbertonCourse {
  /**
   * Creates a HolbertonCourse instance.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in months.
   * @param {string[]} students - An array of student names.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} newName - The new name for the course.
   * @throws {TypeError} If the name is not a string.
   */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  /**
   * Gets the length of the course.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} newLength - The new length for the course.
   * @throws {TypeError} If the length is not a number.
   */
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  /**
   * Gets the students in the course.
   * @returns {string[]} The array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the students in the course.
   * @param {string[]} newStudents - The new array of students.
   * @throws {TypeError} If students is not an array of strings.
   */
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
