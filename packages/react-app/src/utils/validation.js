/*! input-validation */

/**
 * Input validation
 *
 * @module
 */

// Default Regexp
const DEFAULT_REGEXP = {
	'username': /^[a-z0-9][a-z0-9_-]{5,16}$/,
	'password': /^[a-zA-Z0-9_.]{6,}$/,
	'email'   : /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
	'phone'   : /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
};


/**
 * Input Validation of type
 *
 * @export
 * @param {String} input Input text
 * @param {String} type Input type
 * @param {RegExp} [regexp=Default_RegExp] Validation regexp
 * @returns {boolean}
 */
export default function validation(input, type, regexp = DEFAULT_REGEXP[type]) {
	if (input === undefined) {
		return false;
	}
	input = String(input);

	if (regexp) {
		regexp = Object.prototype.toString.call(regexp) === '[object RegExp]' ? regexp : new RegExp(regexp);
	}

	if (!regexp) {
		return false;
	}

	return input.search(regexp) !== -1;
}