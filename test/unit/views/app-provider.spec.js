import React from 'react';
import {IntlProvider} from "react-intl";
import {shallow} from 'enzyme';

import messages from '../../../src/i18n/en.json';
import AppProvider from '../../../src/views/app-provider';

const MockChildComponent = () => (<div/>);

describe('App Provide', () => {
	const anyProps = () => {
		return {
			children: (
				<MockChildComponent/>
			)
		};
		
	};
	const render = (props = anyProps()) => {
		return shallow(<AppProvider {...props}/>);
	}

	describe('Supprot Internationalization', () => {
		it('should configure and render <IntlProvider/> for translation', () => {
			const component = render();

			expect(component.type()).toStrictEqual(IntlProvider);
			expect(component.props().locale).toStrictEqual('en');
            expect(component.props().messages).toStrictEqual(messages); 
		});
	});

	describe('Styling container', () => {
		it('should render a div with context Styling class name', () => {
			const component = render();
			const stylingContainer = component.childAt(0);

			expect(stylingContainer.type()).toStrictEqual('div');
			expect(stylingContainer.hasClass('react-redux-example')).toStrictEqual(true);
		});

		it('should render the children within the providers and styling container', () => {
			const props = anyProps();
			const component = render(props);
			const stylingContainer = component.childAt(0);

			expect(stylingContainer.contains(props.children)).toStrictEqual(true);
		});
	});
});
