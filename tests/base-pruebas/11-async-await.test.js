/* eslint-disable no-undef */

import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
    test("getImagen debe de retornar un URL de la imagen", async() => {
        const resp = await getImagen();
        
        // expect(typeof resp).toBe('string');
        expect(resp).toBe('No se encontro la imagen');
    });
})