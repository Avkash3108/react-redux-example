import React from 'react';
import {shallow} from 'enzyme';

import IconSorted from '../../../../../src/views/common/sort/icon-sorted';

describe('IconSorted Component', () => {
    const render = () => {
        return shallow(<IconSorted/>);
    };

    it('should be a svg', () => {
        const component = render();

        expect(component.type()).toStrictEqual('svg');
    });
});
