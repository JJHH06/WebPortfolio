/**
 * @jest-environment jsdom
 */
/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import { isTSanyKeyword } from '@babel/types';
import Footer from '../Footer.jsx';
import {render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";


afterEach(cleanup);
it('renders footer correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it("Renders footer text correctly",()=>{
    const {getByTestId} = render(<Footer/>)
    expect(getByTestId('footer')).toHaveTextContent("© Jose Hurtarte")
})

it("matches snapshot",()=>{
    const tree = renderer.create(<Footer/>).toJSON()
    expect(tree).toMatchSnapshot();
})