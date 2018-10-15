import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
	it('has the correct types', () => {
		const action = saveComment();

		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('has the correct payload', () => {
		const action = saveComment('NEW COMMENT');
		expect(action.payload).toEqual('NEW COMMENT');

	});
});