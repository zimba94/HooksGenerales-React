import React from "react";
import { shallow } from 'enzyme';
import { HooksApp } from "../HooksApp";

describe('Pruebas en HookApp', () => {
    test('Debe mostarse correctamente', () => {
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
    }); 
});
