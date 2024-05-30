/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    test('Debe de hacer match con el snapshot', () => {
        const title = "Titulo"
        const subTitle = 123
        const { container } = render(<FirstApp title={ title } subTitle= { subTitle } />);

        expect(container).toMatchSnapshot();
    });

    test("Debe de mostrar el titulo en un h1", () => {
        const title = "Titulo"
        const subTitle = 123
        const { container, getByText } = render(<FirstApp title={ title } subTitle= { subTitle } />);

        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);
    });
});