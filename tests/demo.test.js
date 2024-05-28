/* eslint-disable no-undef */

describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe fallar', () => {
        // Inicializacion
        const message1 = 'Hola Mundo';
        
        // Estimulo
        const message2 = message1.trim();
        
        // Observar el comportamiento
        expect(message1).toBe(message2);
    });
});