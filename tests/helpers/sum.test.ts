import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';
import { describe } from 'node:test';

describe('add function', () => {
  test('adds a + b to equal a + b', () => {
    //Preparacion
    const a = 5;
    const b = 2;
    //Estimulo
    const result = sum(a, b);
    //Comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('add array function', () => {
  test('should sum an array', () => {
    //Preparacion
    const a = 4;
    const b = 2;
    const c = 1;
    //Estimulo
    const result = addArray([a, b, c]);
    //Comportamiento esperado
    expect(result).toBe(a + b + c);
  });

  test('should return 0 if array is empty', () => {
    //Preparacion
    const numberArray = [];
    //Estimulo
    const result = addArray(numberArray);
    //Comportamiento esperado
    expect(result).toBe(0);
  });
});
