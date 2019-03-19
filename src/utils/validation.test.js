/*! test */

import validation from './validation.js';


test('test email!', () => {
	expect( validation('test@qq.com', 'email') ).toBeTruthy();
	expect( validation('test.com', 'email') ).toBeFalsy();
} );

test('test phone!', () => {
	expect( validation('18829010246', 'phone') ).toBeTruthy();
	expect( validation('12345678911', 'phone') ).toBeFalsy();
});