//Corrected solution to problem #6 in recursive exercises.

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, searchValue) {
    // because `null` has a typof "object", we have to explicitly check
    // to prevent trying to access `null`'s values (which don't exist)
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      // An important problem in the code quiz solution is that `return contains()` will only
      // search the first property of an object, as it will return whatever the result for it is.
      // If our value was nested within the second property, for example, it would never get checked
      // even if the first nested object did not contain it.
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
  }

  console.log(contains(nestedObject, 44));
  console.log(contains(nestedObject, 'poo'));