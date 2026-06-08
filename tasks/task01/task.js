/**
 * ЗАДАНИЕ 1: Чётные и нечётные числа
 *
 * Напишите функцию filterEven(arr), которая принимает массив чисел
 * и возвращает новый массив, содержащий только чётные числа.
 *
 * Пример:
 *   filterEven([1, 2, 3, 4, 5, 6]) => [2, 4, 6]
 *   filterEven([7, 9, 11])         => []
 */

function filterEven(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++)
  // Ваш код здесь
{ 
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
module.exports = { filterEven };
