/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { isTSanyKeyword } from '@babel/types';
import NavBar from '../NavBar.jsx';
import {render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";


afterEach(cleanup);
it('renders Cover correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});

it("Renders Cover text correctly",()=>{
    const {getByTestId} = render(<NavBar/>)
    expect(getByTestId('texto-portada')).toHaveTextContent("Jose Hurtarte")
})

it("matches snapshot",()=>{
    const tree = renderer.create(<NavBar/>).toJSON()
    expect(tree).toMatchSnapshot();
})

it("verifies first navegation",() =>{
    const {getByTestId} = render(<NavBar/>);
    expect(getByTestId("link-acerca-de").href).toBe("http://localhost/#acerca-de")
})
it("verifies second navegation",() =>{
    const {getByTestId} = render(<NavBar/>);
    expect(getByTestId("link-proyectos").href).toBe("http://localhost/#proyectos")
})
it("verifies third navegation",() =>{
    const {getByTestId} = render(<NavBar/>);
    expect(getByTestId("link-curriculum").href).toBe("http://localhost/#curriculum")
})