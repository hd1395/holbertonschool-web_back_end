export default class Building {
    /**
     * @param {number} sqft The square footage of the building.
     */
    constructor(sqft) {
if (this.constructor !== Building) {
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;    }

    /**
     * Getter for the square footage.
     * @returns {number} The square footage.
     */
    get sqft() {
        return this._sqft;
    }
}