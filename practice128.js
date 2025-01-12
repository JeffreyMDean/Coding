// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  let newArray = [];

  for (let key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      newArray.push([key, items[key]]);
    }
  }

  return newArray;
}

const inputItems = { chair: 100, book: 14 };
const result = converter(inputItems);
console.log(result);

// .call(items, key) allows you to specifiy the context (this) for the fx you're calling. Here, it is saying use the hasOwnProperty method from Object.prototype, but apply it to items, and check if key is a direct property of items

// Object.prototype.hasOwnProperty is the original method that checks if a property is directly in the object (not inherited)
//.call(items, key) applies that method to the items object and checks if the property exists directly on it ***

function converter2(items) {
  let array = [];

  for (let key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      array.push([key, items[key]]);
    }
  }

  return array;
}

const inputItems2 = { chair: 100, book: 14 };
const result2 = converter2(inputItems2);
console.log(result2);
