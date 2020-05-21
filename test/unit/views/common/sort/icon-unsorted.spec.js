import React from 'react';
import {shallow} from 'enzyme';

import IconUnSorted from '../../../../../src/views/common/sort/icon-unsorted';

describe('IconUnSorted Component', () => {
    const render = () => {
        return shallow(<IconUnSorted/>);
    };

    it('should be a svg', () => {
        const component = render();

        expect(component.type()).toStrictEqual('svg');
    });
});
