import { url, login_password, login_username } from '../../../config';
import Navbar from '../../page-objects/components/Navbar';
import Login from '../../page-objects/pages/LoginPage';

describe('Login Failed', () => {
	before(function () {
		cy.visit(url);
		Navbar.clickSignIn();
	});

	it('should try to login with invalid credentials', () => {
		Login.login('invalid username', 'invalid password');
	});

	it('should display the error message', () => {
		Login.displayErrorMessage();
	});
});

describe('Login Success', () => {
	before(function () {
		cy.visit(url);
		Navbar.clickSignIn();
	});

	it('should try to login with invalid credentials', () => {
		Login.login(login_username, login_password);
	});
});
