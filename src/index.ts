/* eslint-disable @typescript-eslint/no-magic-numbers */

type Matrix2x2 = [[bigint, bigint], [bigint, bigint]];

const baseMatrix: Matrix2x2 = [
  [1n, 1n],
  [1n, 0n],
];

/**
 * Multiplies given matrices.
 */
const multiplyMatrices = (first: Matrix2x2, second: Matrix2x2): Matrix2x2 => [
  [
    first[0][0] * second[0][0] + first[0][1] * second[1][0],
    first[0][0] * second[0][1] + first[0][1] * second[1][1],
  ],
  [
    first[1][0] * second[0][0] + first[1][1] * second[1][0],
    first[1][0] * second[0][1] + first[1][1] * second[1][1],
  ],
];

/**
 * Performs a matrix exponentiation, optimized using recursive multiplication.
 */
const exponentiateMatrix = (base: Matrix2x2, exponent: number): Matrix2x2 => {
  if (exponent === 0 || exponent === 1) {
    return base;
  }

  const half = exponentiateMatrix(base, Math.floor(exponent / 2));
  const multiplied = multiplyMatrices(half, half);

  return exponent % 2 === 0
    ? multiplied
    : multiplyMatrices(multiplied, baseMatrix);
};

/**
 * Returns a Fibonacci number at a given index in the sequence.
 */
export const fibonacci = (index: number): bigint => {
  if (index === 0) {
    return BigInt(0);
  }

  return exponentiateMatrix(baseMatrix, index - 1)[0][0];
};
