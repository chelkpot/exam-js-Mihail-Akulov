/**
 * ЗАДАНИЕ 9: Суммы строк матрицы
 *
 * Напишите функцию rowSums(matrix), которая принимает двумерный массив (матрицу)
 * и возвращает новый массив, где каждый элемент — это сумма соответствующей строки.
 *
 * Пример:
 *   rowSums([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) => [6, 15, 24]
 *   rowSums([[10, 20], [5, 5]])                 => [30, 10]
 *   rowSums([])                                 => []
 */

function rowSums(matrix) {
  
  // Ваш код здесь
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    result.push(sum);
  }
  return result;
}

module.exports = { rowSums };
