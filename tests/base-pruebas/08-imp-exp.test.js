/* eslint-disable no-undef */

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById debe retornar un heroe por ID", () => {
        const id=1;
        const heroe = getHeroeById(id);
        
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test("getHeroeById debe retornar undefined sino existe por ID", () => {
        const id=100;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBeFalsy();
    });

    test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
        const owner="DC";
        const heroes2 = getHeroesByOwner(owner);
        
        expect(heroes2.length).toBe(3);
        expect(heroes2).toHaveLength(3);
        expect(heroes2).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);

          expect(heroes2).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });   
    
    test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
        const owner="Marvel";
        const heroes2 = getHeroesByOwner(owner);
        
        expect(heroes2.length).toBe(2);
        expect(heroes2).toHaveLength(2);
        expect(heroes2).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    }); 
});