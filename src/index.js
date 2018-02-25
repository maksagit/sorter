class Sorter {
  constructor() {
    // creates instance of Sorter class
  this.array = [];
  
  this.sorting = function (x,y)
  {
    if (x > y)      // 'x' is greater than 'y' by the ordering criterion
      return 1;
    else if (x < y) // 'x' is less than 'y' by some ordering criterion
      return -1;
    // 'x' must be equal to 'y'
    else return 0;
  }
}
  add(element) {
    //add element and store it in any way inside
    this.array.push(element);
    return this.array;
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    //return the count of current elements, which were added to Sorter instance via add method
    return this.array.length;
  }

  toArray() {
    //return all elements in array  
    return this.array;
  }

  sort(indices) {
    //takes indices of already added elements and sorts only these elements
    indices.sort(function(x, y) {
      return x - y;
    });

    var indArray = [];

    for (let i=0; i<indices.length;i++) { 
      indArray.push(this.array[indices[i]]); 
    }
	  
	  indArray.sort(this.sorting);
	  
	  for (let i=0; i<indices.length;i++) { 
      this.array[indices[i]] = indArray[i]; 
    }

	  return this.array; 
  }

  setComparator(compareFunction) {
    /*  Takes compareFunction as parameter and use it while 
    sorting elements. Sort works for numbers by default */
    this.sorting = compareFunction;
  }
}

module.exports = Sorter;