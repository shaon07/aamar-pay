/**
 * Checks if the given input is an array.
 *
 * @param {any} arr - The input to be checked.
 * @return {boolean} Returns true if the input is an array, otherwise false.
 */
export const checkArray = (arr: any) => {
  return Array.isArray(arr) && arr.length > 0;
};
