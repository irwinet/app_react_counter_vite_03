/* eslint-disable no-undef */

import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas den 02-template-string', () => { 
    test('getSaludo debe retormar "Hola Irwin"', () => {
        const name = 'Irwin';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
});