/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 

    const title = "Titulo";
    const subTitle = 123;

    test('Debe de hacer match con el snapshot', () => {        
        const { container } = render(<FirstApp title={ title } subTitle= { subTitle } />);
        expect(container).toMatchSnapshot();
    });

    test("Debe de mostrar el titulo en un h1", () => {        
        render(<FirstApp title={ title } subTitle= { subTitle } />);

        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();   
        expect(screen.getByTestId('test-title').innerHTML).toBe(title); 
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);   
    });

    test("Debe de mostrar el subtitulo enviado por props", () => {        
        render(<FirstApp title={ title } subTitle= { subTitle } />);

        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});