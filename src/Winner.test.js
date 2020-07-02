import React from 'react';
import { shallow } from 'enzyme';

import Winner from './Winner';


describe('Winner', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<Winner />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});

