
const reverse = (array) => {

  length = array.length;
  middle = Math.floor(length/2);
  hold = null;

  for(let i=0; i<middle; i++) {
    hold = array[i];
    array[i] = array[length-(i+1)];
    array[length-(i+1)] = hold;
  }

  return array;

}

module.exports = reverse;

console.log(reverse([0, 1, 2, 3, 4]));
