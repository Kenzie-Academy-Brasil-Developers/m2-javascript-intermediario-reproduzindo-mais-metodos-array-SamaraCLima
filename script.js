//Método forEach --------
console.log("forEach")
const arrayForEach = [10, 20, 30, 44, 55];
const arrayVazio = [];
function callbackForEach(element) {
  return arrayVazio.push(element * 2);
}
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}
console.log(forEach(arrayForEach, callbackForEach));
console.log(arrayVazio);
//Método Find --------
console.log("Find")
const arrayFind = [12, true, "alfafa", 4, 5];
function callbackFind(element) {
	if (element > 2 && element < 12) {
		return true;
	}
}
function callbackFindTwo(element) {
	if (element > 15) {
		return true;
	}
}
function find(array, callback) {
	for (let i = 0; i < array.length; i++){
		if (callback(array[i])) {
			return array[i];
		}
	}
	return -1;
}
console.log(find(arrayFind, callbackFind));
console.log(find(arrayFind, callbackFindTwo));
//Método IndexOf --------
console.log("IndexOf")
const arrayIndexOf = [595, 206, "apollo", false, null, undefined, 8];
function callbackIndexOf(element) {
  return typeof element === "string" && true;
}
function callbackIndexOfTwo(element) {
  return element == 3 && true;
}
function indexOf(array, callback) {
  for ( i = 0 ; i < array.length ; i++ ) {
    if (callback(array[i])){
      return i
    }
  }
}
console.log(indexOf(arrayIndexOf, callbackIndexOf));
console.log(indexOf(arrayIndexOf, callbackIndexOfTwo));
//Método Includes --------
console.log("Includes")
const arrayIncludes = [53, 2, "duck", NaN, 456, 7];
function callbackIncludesArray(element) {
  return element > 500 && true;
}
function callbackIncludesString(element) {
  return element === "duck" && true;
}
function includes(array, callback) {
  for (let i = 0; i < array.length; i++) {
  if (callback(array[i])) {
    return true;
  }
}
return false;
}
console.log(includes(arrayIncludes, callbackIncludesArray));
console.log(includes(arrayIncludes, callbackIncludesString));
//Método Some --------
console.log("Some")
const arrySome = [12, 82, 563, 414, null];
const callbackSome = (element) => {
  	return element > 82 && true;};
    const callbackSome2 = (element) => {
	if (element) {
		return false;
	}
};
function some(array, callback) {
	  for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			return true;
		}
	}
	return false;
}
console.log(some(arrySome, callbackSome));
console.log(some(arrySome, callbackSome2));
//Método Join --------
console.log("Join")
const arrayJoin = ["Fogo", "no", "Parquinho"];
function join(array, value) {
	let string = array[0];
	for (let i = 1; i < array.length; i++) {
		string += value + array[i];
	}
	return string
}
console.log(join(arrayJoin, " "));
console.log(join(arrayJoin, ""));
console.log(join(arrayJoin, "-"));