/**
 * ЗАДАНИЕ 10: Уникальные элементы
 *
 * Напишите функцию getUnique(arr), которая принимает массив
 * и возвращает новый массив только с уникальными элементами
 * (без повторений), сохраняя порядок первого появления.
 * Нельзя использовать Set.
 *
 * Пример:
 *   getUnique([1, 2, 2, 3, 1, 4]) => [1, 2, 3, 4]
 *   getUnique(["a", "b", "a"])    => ["a", "b"]
 *   getUnique([])                 => []
 */

function getUnique(arr) {
  
  // Ваш код здесь
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = { getUnique };
