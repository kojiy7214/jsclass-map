  /**
   * @class Map
   */
  class Map {
    /**
     * Creates map object.  You may pass itereator to initialize map at creation.
     * Iterator should contain objects with "key" and "value" property.
     * @param {Iterator} it
     * @memberof Map
     */
    constructor(it) {
      this._data = {};
      if (it) {
        this.setAll(it)
      };
    }

    *[Symbol.iterator]() {
      let keys = this.keys();
      let retval = {};

      for (let key of keys) {
        retval.key = key;
        retval.value = this.get(key);
        yield retval;
      }
    }

    /**
     * Remove all elements.
     * @method clear
     * @return {Map} This Map
     * @memberof Map
     * @instance
     */
    clear() {
      this._data = {};
      return this;
    }

    /**
     * Check if the map has no element.
     * @method isEmpty
     * @return {Boolean} If map has no element, then true.
     * @memberof Map
     * @instance
     */
    isEmpty() {
      return this.keys().length == 0;
    }

    /**
     * Count elements in map.
     * @method size
     * @return {Number} Count of elements in map.
     */
    size() {
      return this.keys().length;
    }

    /**
     * Set element to map.  If the map already has a same key, old value will be
     * over written by aruguments value.
     * Key may take any object, but null and undefined.
     * @method set
     * @param  {any} key Key of the element to set.
     * @param  {any} val Value of th element to set.
     * @return {Map} This Map
     * @memberof Map
     * @instance
     */
    set(key, val) {
      this._data[key] = val;
      return this;
    }

    /**
     * Set all elemetns in given iterator to map.  All elements in the Iterator
     * should have "key" and "value" as property.
     * @method setAll
     * @param  {iterator} it Iteratable object with valid elements.
     * @return {Map} This Map
     * @memberof Map
     * @instance
     */
    setAll(it) {
      for (let elem of it) {
        this.set(elem.key, elem.value);
      }
      return this;
    }

    /**
     * Returns the value associated with key.  If key is not present in map,
     * then undefined will be returned.
     * @method get
     * @param  {any} key Key of an element tobe located.
     * @return {any}     Associated value.
     * @memberof Map
     * @instance
     */
    get(key) {
      return this._data[key];
    }

    /**
     * Remove element, with given key.  If key is not present in map,
     * then nothing happens.
     * @method remove
     * @param  {any} key Key of an element to remove.
     * @return {Map} This Map
     * @memberof Map
     * @instance
     */
    remove(key) {
      delete this._data[key];
      return this;
    }

    /**
     * Check if given key is present in map
     * @method has
     * @param  {any}  key Key to check.
     * @return {Boolean}     If present, then true.
     * @memberof Map
     * @instance
     */
    has(key) {
      return key in this._data;
    }

    /**
     * Check if given value is present in map
     * @method hasValue
     * @param  {any}  v value to check.
     * @return {Boolean}     If present, then true.
     * @memberof Map
     * @instance
     */
    hasValue(val) {
      for (let elem of this) {
        if (elem.value === val) {
          return true
        };
      }
      return false;
    }

    /**
     * Returns an array of key, contains in map.
     * @method keys
     * @return {Array} Array of keys.
     * @memberof Map
     * @instance
     */
    keys() {
      return Object.keys(this._data);
    }

    /**
     * Merge two maps and create a new map.  When both maps have elements with
     * same key, vallues are set to match argument map.
     * @method or
     * @param  {Map} map Map to operate.
     * @return {Map}     Result map.
     * @memberof Map
     * @instance
     */
    or(map) {
      let retval = new Map(this);
      retval.setAll(map);

      return retval;
    }

    /**
     * Extract common elements between original map and argument maps.
     * Values are set to match argument map.
     * @method and
     * @param  {Map} map Map to operate.
     * @return {Map}     Result map.
     * @memberof Map
     * @instance
     */
    and(map) {
      let source = (this.size < map.size) ? this : map;
      let target = (source === this) ? map : this;
      let retval = new Map();

      for (let elem of source) {
        target.has(elem.key) && retval.set(elem.key, map.get(elem.key));
      }

      return retval;
    }

    /**
     * Merge elements with unique keys between original and argument map.
     * Result Map will be exactly the same map as, sustarcting the intersection
     * from the union of original and argument maps.
     * @method xor
     * @param  {Map} map Map to operate.
     * @return {Map}     Result map.
     * @memberof Map
     * @instance
     */
    xor(map) {
      let source = (this.size < map.size) ? this : map;
      let target = (source === this) ? map : this;
      let retval = new Map(target);

      for (let elem of source) {
        if (retval.has(elem.key)) {
          retval.remove(elem.key);
        } else {
          retval.set(elem.key, source.get(elem.key));
        }
      }

      return retval;
    }
    /**
     * Extract elements between twu maps, which have common key but different values.
     * @method diffVal
     * @param  {Map} map Map to compare.
     * @return {Map}     Result map.
     * @memberof Map
     * @instance
     */
    diffVal(map) {
      let source = (this.size < map.size) ? this : map;
      let target = (source === this) ? map : this;
      let retval = new Map();

      for (let elem of source) {
        target.has(elem.key) && (target.get(elem.key) !== source.get(elem.key)) &&
          retval.set(elem.key, map.get(elem.key));
      }

      return retval;
    }
  }

  /**
   * Simple map class, which support logical operator.
   * @module jsclass-map
   */
  module.exports = Map;