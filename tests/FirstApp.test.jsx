/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    test('Debe de hacer match con el snapshot', () => {
        const title = "Titulo"
        const subTitle = 123
        render(<FirstApp title={ title } subTitle= { subTitle } />);
    });
});