import React from 'react';
import {shallow} from 'enzyme';
import {render} from 'enzyme';
import Table from '../Table';

const setup = () => {
    // simulate props
    const props = {
       data: [{ "orderId": "LVGVUP", "passengerList": [{ "name": "ARNOLD/NIGELMR" }, { "name": "TAYLOR/HAYLEYMRS" }] }, { "orderId": "LVKBTB", "passengerList": [{ "name": "ATKINSON/KARENMRS" }] }, { "orderId": "LVHZDG", "passengerList": [{ "name": "BALL/LINDAANNMRS" }, { "name": "BALL/STEPHENJOHNMR" }] }, { "orderId": "LVK6HA", "passengerList": [{ "name": "CLARKE/MICHAELMR" }, { "name": "CLARKE/TRACEYMRS" }] }, { "orderId": "LVKBCB", "passengerList": [{ "name": "CLIFFORD/DAVIDMR" }] }]
        // Jest mock function
        // onAddClick: jest.fn((e) => {})
    }

    // use enzyme shallow Rendering to generate component
	const wrapper = render(<Table {...props} />)
    return {
            props,
            wrapper
    }
}

describe('Table', () => {
    const { wrapper, props } = setup();

    // case1
    // test num of table tag
    it('Table Component should render', () => {
        expect(wrapper.find('Table').length).toBe(1);
    })
    // case2
    // test num of tbody tags
    it('tbody tag num should be 5', () => {
        expect(wrapper.find('tbody').length).toBe(5);
    })
    // case3
    // test num of tr tags
    it('tr tag num should be 13', () => {
        expect(wrapper.find('tr').length).toBe(13);
    })
})