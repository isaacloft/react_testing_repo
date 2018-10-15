import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let initialState;
beforeEach(() => {
	initialState = {
		comments:['comment1','comment2']
	};
	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it('creates one Li per comment', () => {

	console.log(wrapped.find('li').length)
	expect(wrapped.find('li').length).toEqual(initialState.comments.length);

});

it('it shows the text for each comment',() =>{

expect(wrapped.render().text()).toContain('comment1');
expect(wrapped.render().text()).toContain('comment2');


});
