import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	console.log('unmount');
	wrapped.unmount();
});

it('has a textarea and button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});

describe('tests for the textarea', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' }
		});
		wrapped.update();
	});

	it('has a textarea and users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('after submit the textarea is emptied', () => {
		
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});