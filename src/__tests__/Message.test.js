import React from 'react';
import {shallow} from 'enzyme';
import {render} from 'enzyme';
import Message from '../Message';

const setup = () => {
    // simulate props
    const props = {
        message: "test"
        // Jest mock function
        // onAddClick: jest.fn((e) => {})
    }

    // use enzyme shallow Rendering to generate component
	const wrapper = render(<Message {...props} />)
    return {
            props,
            wrapper
    }
}

describe('Message', () => {
    const { wrapper, props } = setup();

    // case1
    // test num of table tag
    test('Table Component should render', () => {
        expect(wrapper.find('table').length).toBe(1);
    })
    // case2
    // test num of tbody tags
    test('tbody tag num should be 1', () => {
        expect(wrapper.find('tbody').length).toBe(1);
    })
    // case3
    // test num of tr tags
    test('tr tag num should be 2', () => {
        expect(wrapper.find('tr').length).toBe(2);
    })
})