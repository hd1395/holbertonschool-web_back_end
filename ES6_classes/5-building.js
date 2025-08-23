export default class Building {
    /**
     * @param {number} sqft The square footage of the building.
     */
    constructor(sqft) {
        if (this.constructor === Building) {
            throw new Error("Building is an abstract class and cannot be instantiated directly.");
        }
        this._sqft = sqft;
    }

    evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

    /**
     * Getter for the square footage.
     * @returns {number} The square footage.
     */
    get sqft() {
        return this._sqft;
    }
}