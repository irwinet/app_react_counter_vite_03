# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Add packages
- yarn add prop-types
- yarn add --dev @types/jest
- yarn add --dev babel-jest @babel/core @babel/preset-env
- yarn add -D whatwg-fetch
- yarn add --dev @testing-library/react
- yarn add -D jest-environment-jsdom
- yarn add -D @babel/preset-react

# Example

````javascript
/* eslint-disable no-undef */

describe('Pruebas en ...', () => { 
    test('getUser debe de retornar un objeto', () => {
        console.log('Hola ReactJS');
    });
});
```