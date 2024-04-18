// double values

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }

  // only even values
  
  function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }

  //show first and last
  
  function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }

  //add key and value
  
  function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }

  //vowel count
  
  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  
  // double values
  
  function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //val * index
  
  function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
      return val * idx;
    });
  }

  //extract key
  
  function extractKey(arr, key) {
    return arr.map(function(val) {
      return val[key];
    });
  }
  
//extract full name

  function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  
  // filter by value
  
  function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] !== undefined;
    });
  }

  //find
  
  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }

  //find in object
  
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }

  //remove vowels
  
  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  

  //double odd numbers
  
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }