/**
 * ЗАДАНИЕ 7: Сглаживание вложенного массива (один уровень)
 *
 * Напишите функцию flattenOnce(arr), которая принимает массив,
 * который может содержать вложенные массивы (только один уровень вложенности),
 * и возвращает "плоский" массив всех элементов.
 * Нельзя использовать .flat().
 *
 * Пример:
 *   flattenOnce([1, [2, 3], [4, 5], 6]) => [1, 2, 3, 4, 5, 6]
 *   flattenOnce([[1, 2], [3, 4]])        => [1, 2, 3, 4]
 *   flattenOnce([1, 2, 3])              => [1, 2, 3]
 */

function flattenOnce(arr) {
  const result = []
  // Ваш код здесь
  for (let i = 0; i < arr.length; i++)
{
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
}
  return result;
}

module.exports = { flattenOnce };
