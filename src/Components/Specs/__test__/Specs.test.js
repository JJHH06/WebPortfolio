/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { isTSanyKeyword } from '@babel/types';
import Specs from '../Specs.jsx';
import {render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";


afterEach(cleanup);
it('renders footer correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Specs />, div);
});

it("Renders footer text correctly",()=>{
    const {getByTestId} = render(<Specs/>)
    expect(getByTestId('progress-text')).toHaveTextContent("Java:")
})

it("matches snapshot",()=>{
    const tree = renderer.create(<Specs/>).toJSON()
    expect(tree).toMatchSnapshot();
})