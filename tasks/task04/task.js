/**
 * ЗАДАНИЕ 4: Максимальный элемент
 *
 * Напишите функцию findMax(arr), которая принимает массив чисел
 * и возвращает наибольшее из них.
 * Нельзя использовать Math.max() — только цикл!
 *
 * Пример:
 *   findMax([3, 1, 7, 2, 5]) => 7
 *   findMax([-5, -1, -3])    => -1
 */

function findMax(arr) {
  if (arr.length === 0) {
    console.log();
    return null;
  }
  // Ваш код здесь
  let max = arr[0]

  for (let i = 1; i < arr.length; i++)
{
  if (arr[i] > max) {
    max = arr[i]
  }
}
  return max;
}

module.exports = { findMax };
