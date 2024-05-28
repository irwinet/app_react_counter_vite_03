/* eslint-disable no-undef */

import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prubeas en 07-deses-arr', () => { 
    test('retornaArreglo debe de retornar un string y numero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });
});